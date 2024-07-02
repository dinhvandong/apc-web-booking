package com.apc.webadmin.controllers;

import com.apc.webadmin.dto.ResponseObject;
import com.apc.webadmin.models.GalleryFolder;
import com.apc.webadmin.models.Video;
import com.apc.webadmin.services.GalleryFolderService;
import com.apc.webadmin.services.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/video")
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
public class VideoController {
    @Autowired
    VideoService videoService;

    @PostMapping("/insert")
    public ResponseEntity<?> insert(@RequestBody Video video){

        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, videoService.create(video),"success"));

    }

    @PostMapping("/update")
    public ResponseEntity<?> update(@RequestBody Video galleryFolder){

        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, videoService.update(galleryFolder),"success"));

    }

    @PostMapping("/delete")
    public ResponseEntity<?> deleteItem(@RequestParam Long id){

        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, videoService.delete(id),"success"));

    }
    @GetMapping("/findAll")
    public ResponseEntity<?> findAll()
    {
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, videoService.findAll(),"success"));
    }
}
