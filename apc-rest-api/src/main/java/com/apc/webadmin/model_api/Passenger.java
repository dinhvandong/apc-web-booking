package com.apc.webadmin.model_api;

public class Passenger {

    private String title;
    private String fullname;
    private String nationality;
    private String nationalityname;
    private String dateofbirth;

    public Passenger(){

    }

    public Passenger(String title, String fullname, String nationality, String nationalityname, String dateofbirth) {
        this.title = title;
        this.fullname = fullname;
        this.nationality = nationality;
        this.nationalityname = nationalityname;
        this.dateofbirth = dateofbirth;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getNationalityname() {
        return nationalityname;
    }

    public void setNationalityname(String nationalityname) {
        this.nationalityname = nationalityname;
    }

    public String getDateofbirth() {
        return dateofbirth;
    }

    public void setDateofbirth(String dateofbirth) {
        this.dateofbirth = dateofbirth;
    }
}
