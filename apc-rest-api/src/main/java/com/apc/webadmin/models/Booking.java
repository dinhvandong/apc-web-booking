package com.apc.webadmin.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "bookings")
public class Booking {
    @Id
    private Long id;
    @Transient
    public static final String SEQUENCE_NAME = "booking_sequence";

    @Transient
    public static final int BOOKING_PENDING = 1;

    @Transient
    public static final int BOOKING_CANCEL = 0;

    @Transient
    public static final int BOOKING_DONE = 2;

    private String email;
    private String phone;
    private String title;
    private String firstName;
    private String lastName;
    private String cruiseType;
    private boolean flexibleOrNonRefund;  // true = flexible false = non refund
    private double price;
    private String bookingCode;
    private double priceBase;
    private int status;
    private  int adult;
    private  int children;
    private  int infant;
    private Long bookingDate;
    private Long createdDate;
    private List<Passenger> passengerList = new ArrayList<Passenger>();
    private List<RoomBooking> roomBookingList = new ArrayList<>();

    public List<RoomBooking> getRoomBookingList() {
        return roomBookingList;
    }

    public void setRoomBookingList(List<RoomBooking> roomBookingList) {
        this.roomBookingList = roomBookingList;
    }

    public List<Passenger> getPassengerList() {
        return passengerList;
    }

    public void setPassengerList(List<Passenger> passengerList) {
        this.passengerList = passengerList;
    }

    public String getBookingCode() {
        return bookingCode;
    }

    public void setBookingCode(String bookingCode) {
        this.bookingCode = bookingCode;
    }

    public double getPriceBase() {
        return priceBase;
    }

    public void setPriceBase(double priceBase) {
        this.priceBase = priceBase;
    }

    public Long getBookingDate() {
        return bookingDate;
    }

    public void setBookingDate(Long bookingDate) {
        this.bookingDate = bookingDate;
    }

    public int getAdult() {
        return adult;
    }

    public void setAdult(int adult) {
        this.adult = adult;
    }

    public int getChildren() {
        return children;
    }

    public void setChildren(int children) {
        this.children = children;
    }

    public int getInfant() {
        return infant;
    }

    public void setInfant(int infant) {
        this.infant = infant;
    }

    public Long getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Long createdDate) {
        this.createdDate = createdDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getCruiseType() {
        return cruiseType;
    }

    public void setCruiseType(String cruiseType) {
        this.cruiseType = cruiseType;
    }

    public boolean isFlexibleOrNonRefund() {
        return flexibleOrNonRefund;
    }

    public void setFlexibleOrNonRefund(boolean flexibleOrNonRefund) {
        this.flexibleOrNonRefund = flexibleOrNonRefund;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}
