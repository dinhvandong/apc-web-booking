package com.apc.webadmin.model_api;

public class Transfer {

    private int id;
    private double price;
    private int qty;
    private String type;

    public Transfer(){

    }
    public Transfer(int id, double price, int qty, String type) {
        this.id = id;
        this.price = price;
        this.qty = qty;
        this.type = type;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getQty() {
        return qty;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
