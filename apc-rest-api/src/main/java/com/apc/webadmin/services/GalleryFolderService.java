package com.apc.webadmin.services;


import com.apc.webadmin.database.SequenceGeneratorService;
import com.apc.webadmin.models.EventPlan;
import com.apc.webadmin.models.GalleryFolder;
import com.apc.webadmin.models.GalleryItem;
import com.apc.webadmin.repositories.GalleryFolderRepository;
import com.apc.webadmin.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GalleryFolderService {

    @Autowired
    GalleryFolderRepository galleryFolderRepository;


    @Autowired
    SequenceGeneratorService sequenceGeneratorService;


    public GalleryFolder create(GalleryFolder galleryFolder){
        Long id = sequenceGeneratorService.generateSequence(GalleryFolder.SEQUENCE_NAME);
        galleryFolder.setId(id);
        return galleryFolderRepository.insert(galleryFolder);
    }


    public boolean deleteAll()
    {
        galleryFolderRepository.deleteAll();
        return  true;
    }

    public GalleryFolder findById(Long id){
        Optional<GalleryFolder> optional = galleryFolderRepository.findById(id);

        if(optional.isEmpty()) return  null;
        return optional.get();
    }


    public GalleryFolder addGalleryItem(Long id, GalleryItem galleryItem){

        GalleryFolder galleryFolder = findById(id);

        if(galleryFolder != null){

            List<GalleryItem> galleryItems = galleryFolder.getGalleryItemList();

            Long galleryItemID = sequenceGeneratorService.generateSequence(GalleryItem.SEQUENCE_NAME);

            galleryItem.setId(galleryItemID);

            galleryItems.add(galleryItem);

            galleryFolder.setGalleryItemList(galleryItems);
        }
        assert galleryFolder != null;
        return galleryFolderRepository.save(galleryFolder);

    }


    public GalleryFolder updateGalleryItem(Long id, GalleryItem galleryItem){

        GalleryFolder galleryFolder = findById(id);

        if(galleryFolder != null){

            List<GalleryItem> galleryItems = galleryFolder.getGalleryItemList();

            int count =0;
           for(GalleryItem item: galleryItems){

               if(item.getId().equals(galleryItem.getId())){
                   galleryItems.get(count).setTopic(galleryItem.getTopic());
                   galleryItems.get(count).setShortDesc(galleryItem.getShortDesc());
                   galleryItems.get(count).setThumb(galleryItem.getThumb());
                   break;
               }

               count++;
           }

            galleryFolder.setGalleryItemList(galleryItems);
        }

        assert galleryFolder != null;
        return galleryFolderRepository.save(galleryFolder);
    }


    public GalleryFolder deleteGalleryItem(Long id, Long idItem){

        GalleryFolder galleryFolder = findById(id);

        if(galleryFolder != null){

            List<GalleryItem> galleryItems = galleryFolder.getGalleryItemList();

            int count =0;
            for(GalleryItem item: galleryItems){

                if(item.getId().equals(idItem)){
                    galleryItems.remove(count);
                    break;
                }
                count++;
            }

            galleryFolder.setGalleryItemList(galleryItems);
        }

        assert galleryFolder != null;
        return galleryFolderRepository.save(galleryFolder);
    }


    public List<GalleryItem> findGalleryItems(Long galleryID){
        GalleryFolder galleryFolder = findById(galleryID);
        return galleryFolder.getGalleryItemList();
    }
    public List<GalleryFolder> findAll(){
        return galleryFolderRepository.findAll();
    }

}
