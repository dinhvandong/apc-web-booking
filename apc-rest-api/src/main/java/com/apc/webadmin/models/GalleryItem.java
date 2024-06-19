package com.apc.webadmin.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

public class GalleryItem {
    @Id
    private Long id;
    private String description;

    private String topic;
    private String shortDesc;

    private String thumb;

    @Transient
    public static final String SEQUENCE_NAME = "gallery_item_sequence";
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getShortDesc() {
        return shortDesc;
    }

    public void setShortDesc(String shortDesc) {
        this.shortDesc = shortDesc;
    }

    public String getThumb() {
        return thumb;
    }

    public void setThumb(String thumb) {
        this.thumb = thumb;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
