package com.apc.webadmin.model_api;

import java.util.List;

public class Cabin {

    private String id;
    private int qty;
    private int noOfAdult;
    private int noOfChild;
    private int noOfInfant;
    private double price;
    private double pricechild;
    private String bedtype;
    private List<Passenger> listpassenger;

    public Cabin(){

    }


    public Cabin(String id, int qty, int noOfAdult, int noOfChild, int noOfInfant, double price, double pricechild, String bedtype, List<Passenger> listpassenger) {
        this.id = id;
        this.qty = qty;
        this.noOfAdult = noOfAdult;
        this.noOfChild = noOfChild;
        this.noOfInfant = noOfInfant;
        this.price = price;
        this.pricechild = pricechild;
        this.bedtype = bedtype;
        this.listpassenger = listpassenger;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getQty() {
        return qty;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }

    public int getNoOfAdult() {
        return noOfAdult;
    }

    public void setNoOfAdult(int noOfAdult) {
        this.noOfAdult = noOfAdult;
    }

    public int getNoOfChild() {
        return noOfChild;
    }

    public void setNoOfChild(int noOfChild) {
        this.noOfChild = noOfChild;
    }

    public int getNoOfInfant() {
        return noOfInfant;
    }

    public void setNoOfInfant(int noOfInfant) {
        this.noOfInfant = noOfInfant;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getPricechild() {
        return pricechild;
    }

    public void setPricechild(double pricechild) {
        this.pricechild = pricechild;
    }

    public String getBedtype() {
        return bedtype;
    }

    public void setBedtype(String bedtype) {
        this.bedtype = bedtype;
    }

    public List<Passenger> getListpassenger() {
        return listpassenger;
    }

    public void setListpassenger(List<Passenger> listpassenger) {
        this.listpassenger = listpassenger;
    }
}
