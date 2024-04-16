package com.apc.webadmin.repositories;

import com.apc.webadmin.models.GalleryFolder;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface GalleryFolderRepository extends MongoRepository<GalleryFolder, Long>
{


}
