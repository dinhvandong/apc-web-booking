package com.apc.webadmin.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class RoomAvailabilityResponse {

    @JsonProperty("data")
    private List<RoomAvailabilityData> data;

    @JsonProperty("actionResult")
    private String actionResult;

    public List<RoomAvailabilityData> getData() {
        return data;
    }

    public void setData(List<RoomAvailabilityData> data) {
        this.data = data;
    }

    public String getActionResult() {
        return actionResult;
    }

    public void setActionResult(String actionResult) {
        this.actionResult = actionResult;
    }
}
