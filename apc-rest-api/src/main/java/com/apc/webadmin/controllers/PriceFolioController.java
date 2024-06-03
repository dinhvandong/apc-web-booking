package com.apc.webadmin.controllers;

import com.apc.webadmin.dto.ResponseObject;
import com.apc.webadmin.jwt.JwtInterceptor;
import com.apc.webadmin.models.PriceFolio;
import com.apc.webadmin.models.PriceTable;
import com.apc.webadmin.models.Room;
import com.apc.webadmin.services.PriceFolioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/priceFolio")
@CrossOrigin(origins = {"http://163.44.206.118:80", "http://163.44.206.118:81",        "http://ambassadordaycruise.com/"
})

public class PriceFolioController {

    @Autowired
    PriceFolioService priceFolioService;

    @GetMapping("/findAll")
    public ResponseEntity<?> findAll()
    {
        List<PriceFolio> response =  priceFolioService.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"success"));
    }




    @PostMapping("/delete")
    public ResponseEntity<?> delete(@RequestParam String token, @RequestParam Long id)
    {
        if(token.isBlank())
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"token is not exist"));
        }
        token = "Bearer " + token;

        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if(isAuthenticated)
        {
            // newNotification.setSenderAccount(userFound.getUsername());
            Optional<PriceFolio> optionalPriceFolio = priceFolioService.findById(id);
            if(optionalPriceFolio.isPresent()){
                PriceFolio response =  priceFolioService.delete(id);
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"success"));
            }else {
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(220, "Fail","Not found"));
            }
        }
        else
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"token is not exist"));
        }
    }

    @GetMapping("/findById")
    public ResponseEntity<?> findById(@RequestParam Long id)
    {
        // List<Room> response =  roomService.findAll();
        Optional<PriceFolio> optionalRoom = priceFolioService.findById(id);
        if(optionalRoom.isPresent()){

            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, optionalRoom.get(),"success"));

        }else
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(202, "Not found","fail"));


        }
    }

    @GetMapping("/deleteAll")
    public ResponseEntity<?> deleteAll(){

        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, priceFolioService.deleteAll(),"success"));

    }

    @GetMapping("/findByRoomID")
    public ResponseEntity<?> findByRoomID(@RequestParam Long id)
    {
        // List<Room> response =  roomService.findAll();
        PriceFolio optionalRoom = priceFolioService.findByRoomID(id);
        if(optionalRoom !=null){

            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, optionalRoom,"success"));

        }else
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(202, "Not found","fail"));


        }
    }

    @PostMapping("/updatePriceTable")
    public ResponseEntity<?> updatePriceTable(@RequestParam Long roomID, @RequestBody PriceTable priceTable)
    {
        // List<Room> response =  roomService.findAll();
        PriceFolio optionalRoom = priceFolioService.findByRoomID(roomID);
        if(optionalRoom !=null){

            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, priceFolioService.updatePriceTable(roomID, priceTable),"success"));

        }else
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(202, "Not found","fail"));


        }
    }


    @PostMapping("/insert")
    public ResponseEntity<?> insert(@RequestParam String token, @RequestBody PriceFolio priceFolio)
    {
        if(token.isBlank())
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"token is not exist"));
        }
        token = "Bearer " + token;

        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if(isAuthenticated)
        {
            PriceFolio response =  priceFolioService.create(priceFolio);
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"success"));
        }
        else
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"token is not exist"));
        }
    }

}
