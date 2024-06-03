package com.apc.webadmin.controllers;


import com.apc.webadmin.dto.ResponseObject;
import com.apc.webadmin.models.EventPlan;
import com.apc.webadmin.models.GalleryFolder;
import com.apc.webadmin.services.GalleryFolderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/galleryFolder")
@CrossOrigin(origins = {"http://163.44.206.118:83","http://163.44.206.118:80",        "http://ambassadordaycruise.com/"
,        "http://163.44.206.118:81","http://localhost:3001"})

public class GalleryFolderController {
    @Autowired
    GalleryFolderService galleryFolderService;

    @PostMapping("/insert")
    public ResponseEntity<?> insert(@RequestBody GalleryFolder galleryFolder){

        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, galleryFolderService.create(galleryFolder),"success"));

    }
    @GetMapping("/findAll")
    public ResponseEntity<?> findAll()
    {
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, galleryFolderService.findAll(),"success"));
    }
    @GetMapping("/deleteAll")
    public ResponseEntity<?> deleteAll()
    {
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, galleryFolderService.deleteAll(),"success"));
    }


    @GetMapping("/findById")
    public ResponseEntity<?> findById(@RequestParam Long id)
    {
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, galleryFolderService.findById(id),"success"));
    }



}
