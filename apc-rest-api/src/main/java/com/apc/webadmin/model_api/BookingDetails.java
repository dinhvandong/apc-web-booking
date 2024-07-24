package com.apc.webadmin.model_api;

import java.util.ArrayList;
import java.util.List;

public class BookingDetails {
    private String code;
    private String checkin;
    private String checkout;
    private String fullname;
    private String email;
    private int cruiseID;
    private String pickup;
    private String dropoff;
    private String specialrequest;
    private String phonenumber;
    private double totalprice;
    private String paymentmethod;
    private List<Cabin> listcabin = new ArrayList<>();
    private List<Transfer> listtransfers = new ArrayList<>();
    private List<Extra> listextra = new ArrayList<>();
    public BookingDetails(){

    }
    public BookingDetails(String code, String checkin, String checkout, String fullname, String email, int cruiseID, String pickup, String dropoff, String specialrequest, String phonenumber, double totalprice, String paymentmethod, List<Cabin> listcabin, List<Transfer> listtransfers, List<Extra> listextra) {
        this.code = code;
        this.checkin = checkin;
        this.checkout = checkout;
        this.fullname = fullname;
        this.email = email;
        this.cruiseID = cruiseID;
        this.pickup = pickup;
        this.dropoff = dropoff;
        this.specialrequest = specialrequest;
        this.phonenumber = phonenumber;
        this.totalprice = totalprice;
        this.paymentmethod = paymentmethod;
        this.listcabin = listcabin;
        this.listtransfers = listtransfers;
        this.listextra = listextra;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getCheckin() {
        return checkin;
    }

    public void setCheckin(String checkin) {
        this.checkin = checkin;
    }

    public String getCheckout() {
        return checkout;
    }

    public void setCheckout(String checkout) {
        this.checkout = checkout;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getCruiseID() {
        return cruiseID;
    }

    public void setCruiseID(int cruiseID) {
        this.cruiseID = cruiseID;
    }

    public String getPickup() {
        return pickup;
    }

    public void setPickup(String pickup) {
        this.pickup = pickup;
    }

    public String getDropoff() {
        return dropoff;
    }

    public void setDropoff(String dropoff) {
        this.dropoff = dropoff;
    }

    public String getSpecialrequest() {
        return specialrequest;
    }

    public void setSpecialrequest(String specialrequest) {
        this.specialrequest = specialrequest;
    }

    public String getPhonenumber() {
        return phonenumber;
    }

    public void setPhonenumber(String phonenumber) {
        this.phonenumber = phonenumber;
    }

    public double getTotalprice() {
        return totalprice;
    }

    public void setTotalprice(double totalprice) {
        this.totalprice = totalprice;
    }

    public String getPaymentmethod() {
        return paymentmethod;
    }

    public void setPaymentmethod(String paymentmethod) {
        this.paymentmethod = paymentmethod;
    }

    public List<Cabin> getListcabin() {
        return listcabin;
    }

    public void setListcabin(List<Cabin> listcabin) {
        this.listcabin = listcabin;
    }

    public List<Transfer> getListtransfers() {
        return listtransfers;
    }

    public void setListtransfers(List<Transfer> listtransfers) {
        this.listtransfers = listtransfers;
    }

    public List<Extra> getListextra() {
        return listextra;
    }

    public void setListextra(List<Extra> listextra) {
        this.listextra = listextra;
    }
}
