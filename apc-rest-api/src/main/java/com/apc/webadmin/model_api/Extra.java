package com.apc.webadmin.model_api;

public class Extra {

    private String id;
    private double price;
    private int qty;
    private String moreinfo;

    public Extra(){

    }

    public Extra(String id, double price, int qty, String moreinfo) {
        this.id = id;
        this.price = price;
        this.qty = qty;
        this.moreinfo = moreinfo;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
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

    public String getMoreinfo() {
        return moreinfo;
    }

    public void setMoreinfo(String moreinfo) {
        this.moreinfo = moreinfo;
    }
}
