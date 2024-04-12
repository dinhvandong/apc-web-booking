package com.apc.webadmin.repositories;

import com.apc.webadmin.models.Image;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ImageRepository extends MongoRepository<Image, String> {
}
