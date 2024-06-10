package com.apc.webadmin.controllers;

import com.apc.webadmin.dto.ResponseObject;
import com.apc.webadmin.models.CruiseCabin;
import com.apc.webadmin.models.ItemCabin;
import com.apc.webadmin.services.CruiseCabinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = {
        "http://163.44.206.118:83",
        "http://163.44.206.118:80",
        "http://163.44.206.118",
        "http://163.44.206.118:81",
        "http://localhost:3001",
        "http://localhost:3000",
        "http://150.95.113.18",
        "http://ambassadordaycruise.com/"
})
@RestController
@RequestMapping("/api/cruise-cabin")
public class CruiseCabinController {
    @Autowired
    CruiseCabinService cruiseCabinService;
    @GetMapping("/findAll")
    public ResponseEntity<?> findAll()
    {
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, cruiseCabinService.findAll(),"success"));
    }

    @PostMapping("/insert")
    public ResponseEntity<?> insert(@RequestBody CruiseCabin cruiseCabin){

        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, cruiseCabinService.create(cruiseCabin),"success"));

    }

    @PostMapping("/update")
    public ResponseEntity<?> update(@RequestBody CruiseCabin cruiseCabin){

        Optional<CruiseCabin> optionalCruiseCabin = cruiseCabinService.findById(cruiseCabin.getId());

        if(optionalCruiseCabin.isPresent()){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, cruiseCabinService.update(cruiseCabin),"success"));
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, "Not found id","Cannot update"));
    }


    @PostMapping("/add-item-cabin-list")
    public ResponseEntity<?> addItemCabins(@RequestParam Long cruiseId, @RequestBody List<ItemCabin> itemCabinList){

        Optional<CruiseCabin> optionalCruiseCabin = cruiseCabinService.findById(cruiseId);

        if(optionalCruiseCabin.isPresent()){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, cruiseCabinService.addItemCabin(cruiseId, itemCabinList),"success"));
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, "Not found id","Cannot update"));
    }



}
