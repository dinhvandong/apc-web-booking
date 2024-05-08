package com.apc.webadmin.services;

import com.apc.webadmin.database.SequenceGeneratorService;
import com.apc.webadmin.models.PriceTable;
import com.apc.webadmin.models.PriceTime;
import com.apc.webadmin.repositories.PriceTimeRepository;
import com.apc.webadmin.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

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
        return priceTimeRepository.findAllByDateTimeBetween(startDateTime-1, endDateTime+1);
    }

    public List<PriceTime> findAllByMonthTimeString(String monthTime){

        List<PriceTime> returnList = new ArrayList<>();
        List<PriceTime>  response =         priceTimeRepository.findAllByMonthTimeString(monthTime);

        for(PriceTime priceTime: response){

            if(priceTime.getDateTime() < DateUtils.getCurrentDate()){

                priceTime.setActive(false);
            }else {

                boolean check = cruisePMSService.checkAvaiableSlot(priceTime.getDateTimeString().replace("/","-"),1);

                priceTime.setActive(check);
            }




            returnList.add(priceTime);


        }

        returnList.sort(Comparator.comparingLong(PriceTime::getDateTime));

        return returnList;
    }

}
