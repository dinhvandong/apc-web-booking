package com.apc.webadmin.services;

import com.apc.webadmin.dto.*;
import com.apc.webadmin.utils.DateUtils;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.*;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
//public OilProduct getOilRon95V(){
//    String apiUrl = "http://150.95.113.18:3000/api/v1/oil-price";
//    //150.95.113.18:3000/api/v1/world-oil-prices
//    // Create headers
//    HttpHeaders headers = new HttpHeaders();
//    headers.setContentType(MediaType.APPLICATION_JSON);
//    HttpEntity<?> httpEntity = new HttpEntity<>(headers);
//
//    // Make the POST request
//    ResponseEntity<OildProductData> response = restTemplate.exchange(apiUrl, HttpMethod.POST, httpEntity, OildProductData.class);
//    OildProductData oilPriceData = response.getBody();
//    if (oilPriceData != null) {
//        return oilPriceData.getData()[5];
//    }
//    return null;
//
//}

@Service
public class CruisePMSService {

    RestTemplate restTemplate = new RestTemplateBuilder().build();;

//    @Autowired
//    public CruisePMSService(RestTemplate restTemplate) {
//        this.restTemplate = restTemplate;
//    }


    public boolean checkAvaiableSlot(String dateTime, int cruiseType){


        Long dateTimeNumberYYYYMMDD = Long.parseLong(dateTime.replace("-",""));

        Long currentDate = DateUtils.getCurrentDate();
        if(dateTimeNumberYYYYMMDD< currentDate) return false;


        MappingJackson2HttpMessageConverter jsonConverter = new MappingJackson2HttpMessageConverter();
        List<MediaType> supportedMediaTypes = new ArrayList<>(jsonConverter.getSupportedMediaTypes());
        supportedMediaTypes.add(MediaType.TEXT_HTML); // Add support for text/html in case the response has the wrong content type
        jsonConverter.setSupportedMediaTypes(supportedMediaTypes);

// Add the JSON message converter to RestTemplate
        List<HttpMessageConverter<?>> messageConverters = restTemplate.getMessageConverters();
        messageConverters.add(jsonConverter);
        restTemplate.setMessageConverters(messageConverters);
        // cruiseType = 1 day cruise
        // cruiseType = 2 dinner cruise
        //2024-05-01
        String apiUrl = "https://apc.skysoft.vn/apc2022/api2/1.availableWeb_v2.php?from="+ dateTime+ "&to="+ dateTime +"&cruiseID=10";

        System.out.println("apiURL:"+ apiUrl);

      //  RestTemplate restTemplate = new RestTemplateBuilder().build();
       // ResponseEntity<String> response = restTemplate.exchange(apiUrl, HttpMethod.GET, null, String.class);
        boolean check6 = false;
        boolean check7 = false;
        boolean check16 = false;

        boolean check8 = false;
        boolean check9 = false;
        boolean check17 = false;

//        HttpHeaders headers = new HttpHeaders();
//        headers.setContentType(MediaType.APPLICATION_JSON);
//        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
//        HttpEntity<?> httpEntity = new HttpEntity<>(headers);

        RoomAvailabilityResponse roomAvailabilityResponse = restTemplate.getForObject(apiUrl, RoomAvailabilityResponse.class);
        // Make the POST request
//        ResponseEntity<RoomAvailabilityResponse> response = restTemplate.exchange(apiUrl, HttpMethod.GET, httpEntity, RoomAvailabilityResponse.class);
//        RoomAvailabilityResponse roomAvailabilityResponse = response.getBody();
        assert roomAvailabilityResponse != null;
        List<RoomAvailabilityData> roomAvailabilityData =   roomAvailabilityResponse.getData();

        if(!roomAvailabilityData.isEmpty()) {
            RoomAvailabilityData roomData = roomAvailabilityData.get(0);

            List<RoomAvailability> availabilityList = roomData.getRoomAvai();

            for (RoomAvailability roomAvailability : availabilityList) {
                String idRoom = roomAvailability.getIdRoom();
                String roomType = roomAvailability.getRoomType();
                int qty = roomAvailability.getQuantity();
                String type = roomAvailability.getType();

                if (idRoom.equals("6") && qty > 0) check6 = true;
                if (idRoom.equals("7") && qty > 0) check7 = true;
                if (idRoom.equals("16") && qty > 0) check16 = true;
                if (idRoom.equals("8") && qty > 0) check8 = true;
                if (idRoom.equals("9") && qty > 0) check9 = true;
                if (idRoom.equals("17") && qty > 0) check17 = true;

            }
        }



//        if (response.getStatusCode().is2xxSuccessful()) {
//            String responseBody = response.getBody();
//
//            // Parse the JSON response
//            try {
//                ObjectMapper objectMapper = new ObjectMapper();
//                JsonResult result = objectMapper.readValue(responseBody, JsonResult.class);
//
//                // Access the parsed data
//                List<Data> dataList = result.getData();
//
//                if(!dataList.isEmpty())
//                {
//                    String day = dataList.get(0).getDay();
//                    List<RoomAvailability> roomAvailabilityList = dataList.get(0).getRoomAvai();
//
//                    // Process the room availabilities for each day
//                    for (RoomAvailability roomAvailability : roomAvailabilityList) {
//                        String idRoom = roomAvailability.getIdRoom();
//                        String roomType = roomAvailability.getRoomType();
//                        int qty = roomAvailability.getQuantity();
//                        String type = roomAvailability.getType();
//
//                        if(idRoom.equals("6") && qty >0) check6 = true;
//                        if(idRoom.equals("7") && qty >0) check7 = true;
//                        if(idRoom.equals("16") && qty >0) check16 = true;
//                        if(idRoom.equals("8") && qty >0) check8 = true;
//                        if(idRoom.equals("9") && qty >0) check9 = true;
//                        if(idRoom.equals("17") && qty >0) check17 = true;
//
//
//                        // Do something with the room availability data
//                        System.out.println("Day: " + day);
//                        System.out.println("Room ID: " + idRoom);
//                        System.out.println("Room Type: " + roomType);
//                        System.out.println("Quantity: " + qty);
//                        System.out.println("Type: " + type);
//                        System.out.println();
//                    }
//                }
////                for (Data data : dataList) {
////
////                }
//            } catch (Exception e) {
//                e.printStackTrace();
//            }
//        } else {
//            System.out.println("API request failed with status code: " + response.getStatusCodeValue());
//        }

        if(cruiseType==1){
            // DayCruise
            return check6 || check7 || check16;
        }else if(cruiseType==2){

            return check8 || check9 || check17;
        }

        return false;
    }



}
