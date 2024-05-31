package com.apc.webadmin.controllers;


import com.apc.webadmin.dto.ResponseObject;
import com.apc.webadmin.jwt.JwtInterceptor;
import com.apc.webadmin.models.News;
import com.apc.webadmin.models.Notification;
import com.apc.webadmin.models.User;
import com.apc.webadmin.services.NewsService;
import com.apc.webadmin.services.NotificationService;
import com.apc.webadmin.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = {"http://163.44.206.118:80", "http://163.44.206.118:81","http://localhost:3001"})
@RestController
@RequestMapping("/api/news")
public class NewsController {
    @Autowired
    NewsService newsService;

    @PostMapping("/findAll")
    public ResponseEntity<?> findAll()
    {
        List<News> response =  newsService.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"success"));

    }

    @GetMapping("/findById")
    public ResponseEntity<?> findById(@RequestParam Long id)
    {
        News response =  newsService.findById(id);
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"success"));

    }
    @PostMapping("/insert")
    public ResponseEntity<?> insert(@RequestBody News news)
    {
        News response =  newsService.create(news);
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"success"));
    }

    @PostMapping("/update")
    public ResponseEntity<?> update(@RequestBody News updateNews)
    {
        News response =  newsService.update(updateNews);
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"Ok"));

    }
}
