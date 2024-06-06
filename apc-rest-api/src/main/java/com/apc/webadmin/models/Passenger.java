package com.apc.webadmin.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

public class Passenger {
    @Id
    private Long id;

    @Transient
    public static final String SEQUENCE_NAME = "passenger_sequence";
    private String firstName;
    private String lastName;
    private String title;
    private Long dateOfBirth;
    private int personIdType;
    private String personIdNumber;
    private String nation;
    private String province;
    private String note;

    public Passenger()
    {

    }

    public Passenger(Long id, String firstName, String lastName, String title, Long dateOfBirth, int personIdType, String personIdNumber, String nation, String province, String note) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.title = title;
        this.dateOfBirth = dateOfBirth;
        this.personIdType = personIdType;
        this.personIdNumber = personIdNumber;
        this.nation = nation;
        this.province = province;
        this.note = note;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Long getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Long dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public int getPersonIdType() {
        return personIdType;
    }

    public void setPersonIdType(int personIdType) {
        this.personIdType = personIdType;
    }

    public String getPersonIdNumber() {
        return personIdNumber;
    }

    public void setPersonIdNumber(String personIdNumber) {
        this.personIdNumber = personIdNumber;
    }

    public String getNation() {
        return nation;
    }

    public void setNation(String nation) {
        this.nation = nation;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }
}
