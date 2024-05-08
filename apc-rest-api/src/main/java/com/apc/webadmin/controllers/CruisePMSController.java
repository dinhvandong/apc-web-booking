package com.apc.webadmin.controllers;

import com.apc.webadmin.dto.ResponseObject;
import com.apc.webadmin.services.CruisePMSService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"http://163.44.206.118:80", "http://163.44.206.118:81","http://localhost:3001"})
@RestController
@RequestMapping(value = "/api/cruise-pms", produces = "application/json")
public class CruisePMSController {

    @Autowired
    CruisePMSService cruisePMSService;

    @GetMapping("/checkByDate")
    public ResponseEntity<?> checkByDate(@RequestParam String dateTime, @RequestParam int cruiseType)
    {
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, cruisePMSService.checkAvaiableSlot(dateTime,cruiseType),"success"));
    }

}
