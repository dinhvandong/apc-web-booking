package com.apc.webadmin.repositories;

import com.apc.webadmin.models.RoomType;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoomTypeRepository extends MongoRepository<RoomType, Long>
{


}
