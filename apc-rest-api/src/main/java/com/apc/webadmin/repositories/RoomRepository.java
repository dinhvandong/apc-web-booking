package com.apc.webadmin.repositories;

import com.apc.webadmin.models.Room;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface RoomRepository extends MongoRepository<Room, Long>
{

    public List<Room> findAllByActive(boolean active);


}
