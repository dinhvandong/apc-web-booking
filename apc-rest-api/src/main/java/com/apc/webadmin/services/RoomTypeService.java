package com.apc.webadmin.services;

import com.apc.webadmin.database.SequenceGeneratorService;
import com.apc.webadmin.models.RoomType;
import com.apc.webadmin.models.RoomTypeConfig;
import com.apc.webadmin.repositories.RoomTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RoomTypeService {

    @Autowired
    RoomTypeRepository roomTypeRepository;
    @Autowired
    SequenceGeneratorService sequenceGeneratorService;

    public RoomType create(RoomType roomType)
    {
        Long id = sequenceGeneratorService.generateSequence(RoomType.SEQUENCE_NAME);
        roomType.setId(id);
        return roomTypeRepository.insert(roomType);
    }

    public Optional<RoomType> findById(Long id)
    {
        return roomTypeRepository.findById(id);
    }

    public RoomType update(RoomType roomType)
    {
        Optional<RoomType> optionalRoomType = roomTypeRepository.findById(roomType.getId());
        if(optionalRoomType.isPresent()){
            RoomType roomTypeFound = optionalRoomType.get();
            roomTypeFound.setName(roomType.getName());
            roomTypeFound.setPrice(roomType.getPrice());
            return roomTypeRepository.save(roomTypeFound);
        }
        return null;
    }



}
