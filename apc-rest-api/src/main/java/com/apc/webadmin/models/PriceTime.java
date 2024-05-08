package com.apc.webadmin.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "pricetime")
public class PriceTime {
    @Id
    private Long id;

    @Transient
    public static final String SEQUENCE_NAME = "price_time_sequence";
    private Long dateTime;

    private String dateTimeString;

    private String monthTimeString; //202402 = 2024-02

    private double priceDay;

    private double priceDayNonRefund;

    private double priceDinner;

    private double priceDinnerNonRefund;

    private boolean active;

    private boolean activeDay;

    private boolean activeDinner;


    public boolean isActiveDay() {
        return activeDay;
    }

    public double getPriceDayNonRefund() {
        return priceDayNonRefund;
    }

    public void setPriceDayNonRefund(double priceDayNonRefund) {
        this.priceDayNonRefund = priceDayNonRefund;
    }

    public double getPriceDinnerNonRefund() {
        return priceDinnerNonRefund;
    }

    public void setPriceDinnerNonRefund(double priceDinnerNonRefund) {
        this.priceDinnerNonRefund = priceDinnerNonRefund;
    }

    public void setActiveDay(boolean activeDay) {
        this.activeDay = activeDay;
    }

    public boolean isActiveDinner() {
        return activeDinner;
    }

    public void setActiveDinner(boolean activeDinner) {
        this.activeDinner = activeDinner;
    }

    public double getPriceDay() {
        return priceDay;
    }

    public void setPriceDay(double priceDay) {
        this.priceDay = priceDay;
    }

    public double getPriceDinner() {
        return priceDinner;
    }

    public void setPriceDinner(double priceDinner) {
        this.priceDinner = priceDinner;
    }

    public String getMonthTimeString() {
        return monthTimeString;
    }

    public void setMonthTimeString(String monthTimeString) {
        this.monthTimeString = monthTimeString;
    }

    public String getDateTimeString() {
        return dateTimeString;
    }

    public void setDateTimeString(String dateTimeString) {
        this.dateTimeString = dateTimeString;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getDateTime() {
        return dateTime;
    }

    public void setDateTime(Long dateTime) {
        this.dateTime = dateTime;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }
}
