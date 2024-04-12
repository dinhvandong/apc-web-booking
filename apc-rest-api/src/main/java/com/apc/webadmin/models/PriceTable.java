package com.apc.webadmin.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

public class PriceTable {

    @Id
    private Long id;

    @Transient
    public static final String SEQUENCE_NAME = "price_table_sequence";
    private int percentage; // percent of occupancy
    private double priceUpdate;

    public PriceTable() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public PriceTable(int percentage, double priceUpdate) {
        this.percentage = percentage;
        this.priceUpdate = priceUpdate;
    }

    public int getPercentage() {
        return percentage;
    }

    public void setPercentage(int percentage) {
        this.percentage = percentage;
    }

    public double getPriceUpdate() {
        return priceUpdate;
    }

    public void setPriceUpdate(double priceUpdate) {
        this.priceUpdate = priceUpdate;
    }
}
