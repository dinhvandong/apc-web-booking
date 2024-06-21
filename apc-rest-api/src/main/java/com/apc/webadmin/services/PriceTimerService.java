package com.apc.webadmin.services;

import com.apc.webadmin.database.SequenceGeneratorService;
import com.apc.webadmin.model_api.ApiResponse;
import com.apc.webadmin.model_api.DayData;
import com.apc.webadmin.model_api.RoomAvai;
import com.apc.webadmin.models.PriceTable;
import com.apc.webadmin.models.PriceTime;
import com.apc.webadmin.repositories.PriceTimeRepository;
import com.apc.webadmin.utils.DateUtils;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.util.EntityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.LocalDate;
import java.time.YearMonth;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Service
public class PriceTimerService {
    @Autowired
    PriceTimeRepository priceTimeRepository;
    @Autowired
    SequenceGeneratorService sequenceGeneratorService;

    @Autowired
    CruisePMSService cruisePMSService;
    public PriceTime create(PriceTime priceTime){
        long id = sequenceGeneratorService.generateSequence(PriceTime.SEQUENCE_NAME);
        priceTime.setId(id);
        priceTime.setActive(true);
        boolean check = priceTimeRepository.existsByDateTime(priceTime.getDateTime());
        if(!check){
            return priceTimeRepository.insert(priceTime);
        }
        return null;
    }
    public PriceTime getPriceTimeByDateTime(Long dateTime) {
        return priceTimeRepository.findByDateTime(dateTime);
    }

    public List<PriceTime> createMulti(List<PriceTime> priceTimeList){
        List<PriceTime> listReturn  = new ArrayList<>();
        for(PriceTime priceTime: priceTimeList)
        {
            long id = sequenceGeneratorService.generateSequence(PriceTime.SEQUENCE_NAME);
            priceTime.setId(id);
            priceTime.setActive(true);
            priceTime.setActiveDay(true);
            priceTime.setActiveDinner(true);
            priceTime.setMonthTimeString(DateUtils.convertLongToYYYYMM(priceTime.getDateTime()));
            boolean check = priceTimeRepository.existsByDateTime(priceTime.getDateTime());
            if(!check)
            {
              PriceTime priceTime1 = priceTimeRepository.insert(priceTime);
                listReturn.add(priceTime1);
            }
            else
            {
             PriceTime priceTime2 = getPriceTimeByDateTime(priceTime.getDateTime());
             priceTime.setId(priceTime2.getId());
             PriceTime priceTimeResult = priceTimeRepository.save(priceTime);
             listReturn.add(priceTimeResult);
            }
        }
        return listReturn;
    }

    public void delete(Long id){
        priceTimeRepository.deleteById(id);
    }

    public List<PriceTime> findAll(){
        return priceTimeRepository.findAll();
    }

    public boolean deleteAll()
    {
        priceTimeRepository.deleteAll();
        return true;
    }

    public Page<PriceTime> getPriceTimes(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return priceTimeRepository.findAll(pageable);
    }

    public List<PriceTime> getPricesBetweenDateTime(Long startDateTime, Long endDateTime) {
        List<PriceTime> priceTimes =    priceTimeRepository.findAllByDateTimeBetween(startDateTime-1, endDateTime+1);

        String url = "https://apc.skysoft.vn/apc2022/api2/1.availableWeb_v2.php?from=2024-06-01&to=2024-06-30&cruiseID=10";


        return null;

    }



    // Lấy về danh sách giá các phòng theo ngày

    private static DayData getDayData(ApiResponse apiResponse , String day){


        if (apiResponse != null) {
            // Access the data
            List<DayData> days = apiResponse.getData();

            for(DayData item: days){

                if(item.getDay().equals(day)){

                    return item;
                }
            }

        }

        return null;
    }

    private static ApiResponse callRestApi(String url) {
        ApiResponse apiResponse = null;

        HttpClient httpClient = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .GET()
                .build();

        try {
            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
            String jsonResponse = response.body();

            // Create an ObjectMapper instance
            ObjectMapper objectMapper = new ObjectMapper();

            // Deserialize the JSON response into the ApiResponse object
            apiResponse = objectMapper.readValue(jsonResponse, ApiResponse.class);
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }

        return apiResponse;
    }
    public List<PriceTime> findAllByMonthTimeString(String monthTime){

        YearMonth yearMonth = YearMonth.parse(monthTime, DateTimeFormatter.ofPattern("yyyyMM"));

        LocalDate startDate = yearMonth.atDay(1);
        LocalDate endDate = yearMonth.atEndOfMonth();

        System.out.println("Start Date: " + startDate);
        System.out.println("End Date: " + endDate);

        String url = "https://apc.skysoft.vn/apc2022/api2/1.availableWeb_v2.php?from="+ startDate.toString() +"&to="+ endDate.toString() + "&cruiseID=10";

        ApiResponse apiResponse = callRestApi(url);

        List<PriceTime> returnList = new ArrayList<>();
        List<PriceTime>  response =         priceTimeRepository.findAllByMonthTimeString(monthTime);

        for(PriceTime priceTime: response){
            String dayTime = priceTime.getDateTimeString().replace("/","-");

            DayData dayData = getDayData(apiResponse, dayTime);

            List< RoomAvai> roomAvaiList = dayData.getRoomAvai();

            int slotEmpty = 0;

            for(RoomAvai roomAvai: roomAvaiList){

                if( (roomAvai.getIdRoom().equals("6")) || (roomAvai.getIdRoom().equals("7"))
                        || roomAvai.getIdRoom().equals("16"))
                {
                    if(roomAvai.getQty()>=0){
                        slotEmpty += roomAvai.getQty();
                    }
                }

            }
            float discount = 1;

            if(slotEmpty>0){

                float percentage = (float) ((460 - slotEmpty) * 100) /460.0f;
                if(percentage>80)
                {
                    discount = 0.15f;
                }else if(percentage>=50)
                {
                    discount = 0.2f;
                }else
                {
                    discount = 0.25f;
                }

                priceTime.setPriceDayNonRefund(priceTime.getPriceDayNonRefund()*(1-discount));

            }else {

                discount = 0.05f;

                priceTime.setPriceDay(priceTime.getPriceDay()*(1-discount));
            }

            if(priceTime.getDateTime() < DateUtils.getCurrentDate())
            {

                priceTime.setActive(false);

            }else
            {

                boolean check = cruisePMSService.checkAvaiableSlot(priceTime.getDateTimeString().replace("/","-"),1);

                priceTime.setActive(check);
            }

            returnList.add(priceTime);
        }


        returnList.sort(Comparator.comparingLong(PriceTime::getDateTime));

        return returnList;
    }

}
