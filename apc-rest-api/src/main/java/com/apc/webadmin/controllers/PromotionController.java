package com.apc.webadmin.controllers;

import com.apc.webadmin.dto.ResponseObject;
import com.apc.webadmin.models.News;
import com.apc.webadmin.models.Promotion;
import com.apc.webadmin.services.NewsService;
import com.apc.webadmin.services.PromotionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://163.44.206.118:80",
        "http://ambassadordaycruise.com/"
,        "http://163.44.206.118:81","http://localhost:3001"})
@RestController
@RequestMapping("/api/promotion")
public class PromotionController {
    @Autowired
    PromotionService promotionService;

    @PostMapping("/findAll")
    public ResponseEntity<?> findAll()
    {
        List<Promotion> response =  promotionService.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"success"));

    }

    @PostMapping("/findAllByCategory")
    public ResponseEntity<?> findAllByCategory(@RequestParam String category)
    {
        List<Promotion> response =  promotionService.findAllByCategory(category);
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"success"));

    }

    @PostMapping("/deleteAll")
    public ResponseEntity<?> deleteAll()
    {
        boolean check =  promotionService.deleteAll();
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, check,"success"));

    }

    @GetMapping("/findById")
    public ResponseEntity<?> findById(@RequestParam Long id)
    {
        Promotion response =  promotionService.findById(id);
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"success"));

    }

    @PostMapping("/insert")
    public ResponseEntity<?> insert(@RequestBody Promotion news)
    {
        Promotion response =  promotionService.create(news);
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"success"));
    }

    @PostMapping("/update")
    public ResponseEntity<?> update(@RequestBody Promotion updateNews)
    {
        Promotion response =  promotionService.update(updateNews);
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"Ok"));

    }
}
