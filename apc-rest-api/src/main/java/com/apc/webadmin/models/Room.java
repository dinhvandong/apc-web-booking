package com.apc.webadmin.models;


import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;
@Document(collection = "rooms")
public class Room {
    @Id
    private Long id;
    @Transient
    public static final String SEQUENCE_NAME = "rooms_sequence";
    private String roomType;
    private double priceBase;
    private String description;
    private String thumb;
    private List<String> thumbList;
    private List<RoomItem> roomItemList = new ArrayList<>() ;
    private boolean active;
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public List<RoomItem> getRoomItemList() {
        return roomItemList;
    }

    public String getThumb() {
        return thumb;
    }

    public void setThumb(String thumb) {
        this.thumb = thumb;
    }

    public Room() {
        //roomItemList = new ArrayList<>();
    }

    public void setRoomItemList(List<RoomItem> roomItemList) {
        this.roomItemList = roomItemList;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getRoomType() {
        return roomType;
    }
    public void setRoomType(String roomType) {
        this.roomType = roomType;
    }
    public List<String> getThumbList() {
        return thumbList;
    }
    public double getPriceBase() {
        return priceBase;
    }
    public void setPriceBase(double priceBase) {
        this.priceBase = priceBase;
    }
    public void setThumbList(List<String> thumbList) {
        this.thumbList = thumbList;
    }
    public boolean isActive() {
        return active;
    }
    public void setActive(boolean active) {
        this.active = active;
    }
}
