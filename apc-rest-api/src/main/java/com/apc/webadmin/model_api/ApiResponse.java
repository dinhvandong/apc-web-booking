package com.apc.webadmin.model_api;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;
@JsonIgnoreProperties(ignoreUnknown = true)
public class ApiResponse {
    private List<DayData> data;

    public List<DayData> getData() {
        return data;
    }

    public void setData(List<DayData> data) {
        this.data = data;
    }

    // Constructors, getters, and setters
}
