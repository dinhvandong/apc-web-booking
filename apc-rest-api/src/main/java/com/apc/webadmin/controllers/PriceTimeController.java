package com.apc.webadmin.controllers;

import com.apc.webadmin.dto.ResponseObject;
import com.apc.webadmin.models.PriceTable;
import com.apc.webadmin.models.PriceTime;
import com.apc.webadmin.services.PriceTimerService;
import com.apc.webadmin.utils.DateUtils;
import jakarta.persistence.PreUpdate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/pricetimes")
public class PriceTimeController {

    @Autowired
    PriceTimerService priceTimeService;

    @GetMapping("/getList")
    public Page<PriceTime> getPriceTimes(
            @RequestParam
            int page,
            @RequestParam int size)
    {
        return priceTimeService.getPriceTimes(page, size);
    }

    @GetMapping("/getPriceByDate")
    public PriceTime getPriceByDate(@RequestParam Long date){

        return priceTimeService.getPriceTimeByDateTime(date);
    }

    @GetMapping("/getPriceFromDate")
    public List<PriceTime> getPriceByDate(@RequestParam Long dateFrom, @RequestParam Long dateTo){

        return priceTimeService.getPricesBetweenDateTime(dateFrom, dateTo);
    }

    @GetMapping("/getPriceFromMonth")
    public List<PriceTime> getPriceFromMonth(@RequestParam String monthTime){

        return priceTimeService.findAllByMonthTimeString(monthTime);
    }

    @GetMapping("/deleteAll")
    public ResponseEntity<?> deleteAll()
    {

        return ResponseEntity.status(HttpStatus.OK)
                .body(
                    new ResponseObject(200,
                                priceTimeService.deleteAll(),
                                "success"));

    }

    @PostMapping("/insert")
    public PriceTime create(@RequestBody PriceTime priceTime){
        return priceTimeService.create(priceTime);

    }

    @PostMapping("/insertMulti")
    public List<PriceTime> insertMulti(@RequestBody List<PriceTime> priceTimeList){
        return priceTimeService.createMulti(priceTimeList);

    }


    @PostMapping("/insertMulti2")
    public List<PriceTime> insertMulti2(@RequestParam String dateFrom,
                                        @RequestParam String dateTo,
                                        @RequestParam double priceDay,
                                        @RequestParam double priceDinner,

                                        @RequestParam double priceDayNonRefund,

                                        @RequestParam double priceDinnerNonRefund)
    {
        List<String> arrayDate = DateUtils.getDatesBetween(dateFrom,dateTo);
        List<PriceTime> priceTimeList = new ArrayList<>();
        for(String date: arrayDate)
        {
            PriceTime priceTime = new PriceTime();
            priceTime.setActive(true);
            priceTime.setPriceDay(priceDay);
            priceTime.setPriceDinner(priceDinner);
            priceTime.setPriceDayNonRefund(priceDayNonRefund);
            priceTime.setPriceDinnerNonRefund(priceDinnerNonRefund);
            priceTime.setDateTimeString(date);
            Long dateLong = Long.parseLong(date.replace("/",""));
            priceTime.setDateTime(dateLong);
            priceTimeList.add(priceTime);
        }
        return priceTimeService.createMulti(priceTimeList);
    }

    @PostMapping("/delete")
    public void delete(@RequestParam Long id){
         priceTimeService.delete(id);
    }
    // Other methods in the controller
}
