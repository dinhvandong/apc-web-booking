package com.apc.webadmin.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

// Su kien cua du thuyen

@Document(collection = "event_plan")
public class EventPlan {
    @Id
    private Long id;
    private String name;
    private String subName;
    private boolean active;
    private String icon;
    private String type;
    private Long createdDate;

    private  List<EventPlanItem> eventPlanItemList;


    public List<EventPlanItem> getEventPlanItemList() {
        return eventPlanItemList;
    }

    public void setEventPlanItemList(List<EventPlanItem> eventPlanItemList) {
        this.eventPlanItemList = eventPlanItemList;
    }

    public String getSubName() {
        return subName;
    }

    public void setSubName(String subName) {
        this.subName = subName;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Transient
    public static final String SEQUENCE_NAME = "event_plan_sequence";
    private List<EventItem> eventItemList = new ArrayList<>();

    public List<EventItem> getEventItemList() {
        return eventItemList;
    }

    public void setEventItemList(List<EventItem> eventItemList) {
        this.eventItemList = eventItemList;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public Long getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Long createdDate) {
        this.createdDate = createdDate;
    }
}
