package com.apc.webadmin.controllers;


import com.apc.webadmin.dto.ResponseObject;
import com.apc.webadmin.jwt.JwtInterceptor;
import com.apc.webadmin.models.*;
import com.apc.webadmin.services.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/room")
@CrossOrigin(origins = {"http://163.44.206.118:83","http://163.44.206.118:80", "http://163.44.206.118:81","http://localhost:3001"})

public class RoomController {
    @Autowired
    RoomService roomService;
    @GetMapping("/findAll")
    public ResponseEntity<?> findAll()
    {
        List<Room> response =  roomService.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"success"));
    }
    @GetMapping("/setup-folio")
    public ResponseEntity<?> setUp()
    {
        roomService.setAllFolioForRoom();
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, "set all folio","success"));
    }
    @GetMapping("/findById")
    public ResponseEntity<?> findById(@RequestParam Long id)
    {
       // List<Room> response =  roomService.findAll();
        Optional<Room> optionalRoom = roomService.findById(id);
        if(optionalRoom.isPresent()){

            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, optionalRoom.get(),"success"));

        }else
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(202, "Not found","fail"));


        }
    }

    @PostMapping("/insert")
    public ResponseEntity<?> insert(@RequestParam String token, @RequestBody Room newRoom)
    {
        if(token.isBlank())
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"token is not exist"));
        }
        token = "Bearer " + token;

        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if(isAuthenticated)
        {
            Room response =  roomService.create(newRoom);
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"success"));
        }
        else
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"token is not exist"));
        }
    }


    @PostMapping("/add-items")
    public ResponseEntity<?> addItemCabins(@RequestParam Long id, @RequestBody List<RoomItem> roomItems){
        Optional<Room> roomOptional = roomService.findById(id);

        if(roomOptional.isPresent()){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, roomService.addRoomItem(id, roomItems),"success"));
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, "Not found id","Cannot update"));
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
            Optional<Room> optionalRoom = roomService.findById(id);
            if(optionalRoom.isPresent()){
                Room response =  roomService.delete(id);
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


    @GetMapping("/deleteAll")
    public ResponseEntity<?> deleteAll(){

        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, roomService.deleteAll(),"success"));

    }



    @PostMapping("/update")
    public ResponseEntity<?> update(@RequestParam String token, @RequestBody Room newRoom)
    {
        if(token.isBlank())
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"token is not exist"));
        }
        token = "Bearer " + token;

        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if(isAuthenticated)
        {
            Room response =  roomService.update(newRoom);
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"success"));
        }
        else
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"token is not exist"));
        }
    }
}
