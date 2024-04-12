package com.apc.webadmin.models;


import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

import java.util.List;

public class EventItem {
    @Id
    private Long id;

    @Transient
    public static final String SEQUENCE_NAME = "event_item_sequence";
    private String title;
    private String subTitle;
    private String icon;
    private String desc;
    private boolean active;

    private List<EventItemChild> eventItemChildList;

    public List<EventItemChild> getEventItemChildList() {
        return eventItemChildList;
    }

    public void setEventItemChildList(List<EventItemChild> eventItemChildList) {
        this.eventItemChildList = eventItemChildList;
    }

    public String getSubTitle() {
        return subTitle;
    }

    public void setSubTitle(String subTitle) {
        this.subTitle = subTitle;
    }
    //    private  int type ; // 0: free 1: charge 2: not permitted

//    public int getType() {
//        return type;
//    }
//
//    public void setType(int type) {
//        this.type = type;
//    }

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

    public boolean isActive() {
        return active;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public void setActive(boolean active) {
        this.active = active;
    }
}
