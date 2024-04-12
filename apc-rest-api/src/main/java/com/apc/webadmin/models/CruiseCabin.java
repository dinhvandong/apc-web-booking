package com.apc.webadmin.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;
@Document(collection = "cruise_cabin")
public class CruiseCabin {
    // Model nay danh cho danh sach cac cabin du thuyen
    @Id
    private Long id;
    private  String name; // ten cua loai cabin
    private String cruise; // ten loai tau
    private double price; // gia phong tieu chuan theo ngay
    private boolean active; // trang thai . mac dinh active = true
    private String image; // hinh anh dai dien
    private Long createdDate; // Ngay tao
    private int type ; // loai


    @Transient
    public static final String SEQUENCE_NAME = "cruise_cabin_sequence";
    private List<ItemCabin> itemCabinList = new ArrayList<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCruise() {
        return cruise;
    }

    public void setCruise(String cruise) {
        this.cruise = cruise;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Long getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Long createdDate) {
        this.createdDate = createdDate;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public List<ItemCabin> getItemCabinList() {
        return itemCabinList;
    }

    public void setItemCabinList(List<ItemCabin> itemCabinList) {
        this.itemCabinList = itemCabinList;
    }
}
