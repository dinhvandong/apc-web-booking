package com.apc.webadmin.controllers;

import com.apc.webadmin.dto.ResponseObject;
import com.apc.webadmin.models.Itinerary;
import com.apc.webadmin.models.News;
import com.apc.webadmin.services.ItineraryService;
import com.apc.webadmin.services.NewsService;
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
        "http://ambassadordaycruise.com/",
        "http://admin.ambassadordaycruise.com/"

})
@RestController
@RequestMapping("/api/itinerary")
public class ItineraryController {

    @Autowired
    ItineraryService itineraryService;

    @PostMapping("/findAll")
    public ResponseEntity<?> findAll()
    {
        List<Itinerary> response =  itineraryService.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"success"));
    }

    @PostMapping("/deleteAll")
    public ResponseEntity<?> deleteAll()
    {
        boolean check =  itineraryService.deleteAll();
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, check,"success"));
    }

    @GetMapping("/findById")
    public ResponseEntity<?> findById(@RequestParam Long id)
    {
        Optional<Itinerary> response =  itineraryService.findById(id);
        if(response.isEmpty()) {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"Not found"));
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response.get(),"success"));
    }
    @PostMapping("/insert")
    public ResponseEntity<?> insert(@RequestBody Itinerary item)
    {
        Itinerary response =  itineraryService.insert(item);
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"success"));
    }

    @PostMapping("/update")
    public ResponseEntity<?> update(@RequestBody Itinerary updateNews)
    {
        Itinerary response =  itineraryService.update(updateNews);
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"Ok"));

    }
}
