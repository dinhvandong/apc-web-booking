package com.apc.webadmin.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;
@Document(collection = "priceFolio")
public class PriceFolio {
    @Id
    private Long id;
    @Transient
    public static final String SEQUENCE_NAME = "priceFolio_sequence";
    private  Long roomID;
    private String roomType;
    private double priceBase;
    private List<PriceTable> priceTableList = new ArrayList<>();
    private boolean active;
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getRoomID() {
        return roomID;
    }

    public void setRoomID(Long roomID) {
        this.roomID = roomID;
    }

    public String getRoomType() {
        return roomType;
    }

    public void setRoomType(String roomType) {
        this.roomType = roomType;
    }

    public double getPriceBase() {
        return priceBase;
    }

    public void setPriceBase(double priceBase) {
        this.priceBase = priceBase;
    }

    public List<PriceTable> getPriceTableList() {
        return priceTableList;
    }

    public void setPriceTableList(List<PriceTable> priceTableList) {
        this.priceTableList = priceTableList;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }
}
