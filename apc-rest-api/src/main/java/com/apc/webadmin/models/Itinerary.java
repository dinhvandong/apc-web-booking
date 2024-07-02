package com.apc.webadmin.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
@Document(collection = "itinerary")
public class Itinerary {

    @Id
    private Long id;

    @Transient
    public static final String SEQUENCE_NAME = "itinerary_sequence";

    private String title;
    private String desc;
    private List<ItineraryItem> itemList;

    private String importanceNotes;

    private String benefits;

    private String inclusions;

    private String exclusions;



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public List<ItineraryItem> getItemList() {
        return itemList;
    }

    public void setItemList(List<ItineraryItem> itemList) {
        this.itemList = itemList;
    }

    public String getImportanceNotes() {
        return importanceNotes;
    }

    public void setImportanceNotes(String importanceNotes) {
        this.importanceNotes = importanceNotes;
    }

    public String getBenefits() {
        return benefits;
    }

    public void setBenefits(String benefits) {
        this.benefits = benefits;
    }

    public String getInclusions() {
        return inclusions;
    }

    public void setInclusions(String inclusions) {
        this.inclusions = inclusions;
    }

    public String getExclusions() {
        return exclusions;
    }

    public void setExclusions(String exclusions) {
        this.exclusions = exclusions;
    }
}
