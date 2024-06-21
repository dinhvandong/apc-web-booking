package com.apc.webadmin.model_api;

import java.util.List;

public class DayData {
    private String day;
    private int totalQty;
    private String occupancy;
    private List<RoomAvai> roomAvai;

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public int getTotalQty() {
        return totalQty;
    }

    public void setTotalQty(int totalQty) {
        this.totalQty = totalQty;
    }

    public String getOccupancy() {
        return occupancy;
    }

    public void setOccupancy(String occupancy) {
        this.occupancy = occupancy;
    }

    public List<RoomAvai> getRoomAvai() {
        return roomAvai;
    }

    public void setRoomAvai(List<RoomAvai> roomAvai) {
        this.roomAvai = roomAvai;
    }


    // Constructors, getters, and setters
}
