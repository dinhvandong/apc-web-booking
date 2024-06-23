package com.apc.webadmin.repositories;

import com.apc.webadmin.models.GalleryFolder;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface GalleryFolderRepository extends MongoRepository<GalleryFolder, Long>
{

    List<GalleryFolder> findAllByCategory(String category);


}
