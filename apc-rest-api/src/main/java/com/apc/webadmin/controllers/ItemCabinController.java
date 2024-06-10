package com.apc.webadmin.controllers;

import com.apc.webadmin.dto.ResponseObject;
import com.apc.webadmin.models.CruiseCabin;
import com.apc.webadmin.models.ItemCabin;
import com.apc.webadmin.services.ItemCabinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
@RequestMapping("/api/item-cabin")
public class ItemCabinController {
    @Autowired
    ItemCabinService itemCabinService;
    @GetMapping("/findAll")
    public ResponseEntity<?> findAll()
    {
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, itemCabinService.findAll(),"success"));
    }

    @PostMapping("/insert")
    public ResponseEntity<?> insert(@RequestBody ItemCabin itemCabin){

        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, itemCabinService.create(itemCabin),"success"));
    }

    @PostMapping("/update")
    public ResponseEntity<?> update(@RequestBody ItemCabin itemCabin){

        Optional<ItemCabin> optionalItemCabin = itemCabinService.findById(itemCabin.getId());

        if(optionalItemCabin.isPresent()){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, itemCabinService.update(itemCabin),"success"));
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, "Not found id","Cannot update"));
    }

}
