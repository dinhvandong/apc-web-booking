package com.apc.webadmin.services;


import com.apc.webadmin.database.SequenceGeneratorService;
import com.apc.webadmin.models.*;
import com.apc.webadmin.repositories.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class RoomService {

    @Autowired
    RoomRepository roomRepository;
    @Autowired
    SequenceGeneratorService sequenceGeneratorService;

    @Autowired
    PriceFolioService priceFolioService;

    public Room create(Room newRoom){
        Long idNew = sequenceGeneratorService.generateSequence(Room.SEQUENCE_NAME);
        newRoom.setId(idNew);
        newRoom.setActive(true);

//        PriceFolio priceFolio = new PriceFolio();
//        priceFolio.setRoomID(idNew);
//        priceFolio.setRoomType(newRoom.getRoomType());
//        priceFolio.setPriceBase(newRoom.getPriceBase());
//        priceFolioService.create(priceFolio);
        return roomRepository.insert(newRoom);
    }

    public boolean deleteAll()
    {
        roomRepository.deleteAll();
        return  true;
    }
    public void autoGenerateFolio(Room room){
        PriceFolio priceFolio = new PriceFolio();
        priceFolio.setRoomID(room.getId());
        priceFolio.setRoomType(room.getRoomType());
        priceFolio.setPriceBase(room.getPriceBase());
        priceFolioService.create(priceFolio);
    }

    public void setAllFolioForRoom(){
        List<Room> roomList = findAll();
        for(Room room: roomList){
            autoGenerateFolio(room);
        }
    }

    public Optional<Room> findById(Long id){

        return roomRepository.findById(id);
    }

    public Room addRoomItem(Long id, List<RoomItem> roomItemList){
        Optional<Room> roomOptional = roomRepository.findById(id);
        List<RoomItem> roomItemListUpdate = new ArrayList<>();
        for(RoomItem item: roomItemList){
            Long itemID = sequenceGeneratorService.generateSequence(RoomItem.SEQUENCE_NAME);
            item.setId(itemID);
            item.setActive(true);
            roomItemListUpdate.add(item);
        }
        if(roomOptional.isPresent()){
            Room roomFound = roomOptional.get();
            List<RoomItem> roomItems = new ArrayList<>();
            try {
                roomItems = roomFound.getRoomItemList();
                roomItems.addAll(roomItemListUpdate);
            }catch (Exception ignored){
            }
            roomFound.setRoomItemList(roomItems);
            return roomRepository.save(roomFound);
        }
        return null;
    }
    public Room update(Room updateRoom){
        Optional<Room> optionalRoom = roomRepository.findById(updateRoom.getId());
        if(optionalRoom.isPresent()){

            Room roomFound = optionalRoom.get();
            roomFound.setRoomType(updateRoom.getRoomType());
            roomFound.setThumbList(updateRoom.getThumbList());
            roomFound.setDescription(updateRoom.getDescription());
            roomFound.setPriceBase(updateRoom.getPriceBase());
            roomFound.setThumb(updateRoom.getThumb());
            roomFound.setRoomItemList(updateRoom.getRoomItemList());
            return roomRepository.save(roomFound);
        }
        return null;
    }

    public Room delete(Long id){
        Optional<Room> optionalRoom = roomRepository.findById(id);
        if(optionalRoom.isPresent()){

            Room roomFound = optionalRoom.get();

            roomFound.setActive(false);
            return roomRepository.save(roomFound);
        }
        return null;
    }



    public List<Room> findAll(){

        return  roomRepository.findAllByActive(true);
    }





}
