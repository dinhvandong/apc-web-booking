package com.apc.webadmin.controllers;

import com.apc.webadmin.dto.EventId;
import com.apc.webadmin.dto.ResponseObject;
import com.apc.webadmin.models.CruiseCabin;
import com.apc.webadmin.models.EventItem;
import com.apc.webadmin.models.EventItemChild;
import com.apc.webadmin.models.EventPlan;
import com.apc.webadmin.services.EventPlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://150.95.110.230")
@RestController
@RequestMapping("/api/event-plan")
public class EventPlanController {

    @Autowired
    EventPlanService eventPlanService;

    @GetMapping("/findAll")
    public ResponseEntity<?> findAll()
    {
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, eventPlanService.findAll(),"success"));
    }

    @GetMapping("/findAllEventItems")
    public ResponseEntity<?> findAllEventItems(@RequestParam Long eventID)
    {
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, eventPlanService.findAllEventItem(eventID),"success"));
    }


    @GetMapping("/findAllEventItemsChild")
    public ResponseEntity<?> findAllEventItemsChild(@RequestParam Long eventID, @RequestParam Long eventItemID)
    {
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, eventPlanService.findAllEventItemChild(eventID, eventItemID),"success"));
    }

    @GetMapping("/findById")
    public ResponseEntity<?> findById(@RequestParam Long id){

        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, eventPlanService.findById(id),"success"));

    }

    @PostMapping("/delete")
    public ResponseEntity<?> delete(@RequestBody EventId eventId){

        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, eventPlanService.deleteById(eventId.getId()),"success"));

    }

    @PostMapping("/insert")
    public ResponseEntity<?> insert(@RequestBody EventPlan eventPlan){

        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, eventPlanService.create(eventPlan),"success"));

    }

    @PostMapping("/update")
    public ResponseEntity<?> update(@RequestBody EventPlan eventPlan){

        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, eventPlanService.update(eventPlan),"success"));

    }


    @GetMapping("/deleteAll")
    public ResponseEntity<?> deleteAll(){

        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, eventPlanService.deleteAll(),"success"));

    }

    @PostMapping("/add-event-item")
    public ResponseEntity<?> addEventItem(@RequestParam Long id,  @RequestBody List<EventItem> eventItemList){

        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, eventPlanService.addItem(id, eventItemList),"success"));

    }


    @PostMapping("/add-event-item-child")
    public ResponseEntity<?> addEventItemChild(@RequestParam Long id, @RequestParam Long idItem,  @RequestBody List<EventItemChild> itemChildList){
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, eventPlanService.addItemChild(id,idItem, itemChildList),"success"));
    }

}
