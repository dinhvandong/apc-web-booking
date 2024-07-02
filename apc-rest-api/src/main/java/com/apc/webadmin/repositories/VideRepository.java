package com.apc.webadmin.repositories;

import com.apc.webadmin.models.Video;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface VideRepository extends MongoRepository<Video, Long>
{
}
