package com.apc.webadmin.controllers;


import com.apc.webadmin.dto.ResponseObject;
import com.apc.webadmin.models.EventPlan;
import com.apc.webadmin.models.GalleryFolder;
import com.apc.webadmin.models.GalleryItem;
import com.apc.webadmin.services.GalleryFolderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/galleryFolder")
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

public class GalleryFolderController {
    @Autowired
    GalleryFolderService galleryFolderService;

    @PostMapping("/insert")
    public ResponseEntity<?> insert(@RequestBody GalleryFolder galleryFolder){

        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, galleryFolderService.create(galleryFolder),"success"));

    }

    @PostMapping("/update")
    public ResponseEntity<?> update(@RequestBody GalleryFolder galleryFolder){

        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, galleryFolderService.update(galleryFolder),"success"));

    }

    @PostMapping("/delete")
    public ResponseEntity<?> deleteItem(@RequestParam Long id){

        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, galleryFolderService.delete(id),"success"));

    }
    @GetMapping("/findAll")
    public ResponseEntity<?> findAll()
    {
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, galleryFolderService.findAll(),"success"));
    }

    @GetMapping("/findAllByCategory")
    public ResponseEntity<?> findAllByCategory(@RequestParam String category)
    {
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, galleryFolderService.findAllByCategory(category),"success"));
    }

    @GetMapping("/findAllGalleryItems")
    public ResponseEntity<?> findAllGalleryItems(@RequestParam Long galleryID)
    {
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, galleryFolderService.findGalleryItems(galleryID),"success"));
    }

    @PostMapping("/addItem")
    public ResponseEntity<?> addItem(@RequestParam Long id,  @RequestBody GalleryItem item){

        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, galleryFolderService.addGalleryItem(id,item),"success"));

    }

    @PostMapping("/updateItem")
    public ResponseEntity<?> updateItem(@RequestParam Long id,  @RequestBody GalleryItem item){

        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, galleryFolderService.updateGalleryItem(id,item),"success"));

    }

    @PostMapping("/deleteItem")
    public ResponseEntity<?> deleteItem(@RequestParam Long id,  @RequestParam Long idItem){

        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, galleryFolderService.deleteGalleryItem(id,idItem),"success"));

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
