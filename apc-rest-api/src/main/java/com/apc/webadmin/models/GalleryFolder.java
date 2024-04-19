package com.apc.webadmin.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "gallery")
public class GalleryFolder {
    @Id
    private Long id;

    @Transient
    public static final String SEQUENCE_NAME = "gallery_folder_sequence";
    private String topic;

    private String shortDesc;

    private List<GalleryItem> galleryItemList;

    public Long getId() {
        return id;
    }

    public String getShortDesc() {
        return shortDesc;
    }

    public void setShortDesc(String shortDesc) {
        this.shortDesc = shortDesc;
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

    public List<GalleryItem> getGalleryItemList() {
        return galleryItemList;
    }

    public void setGalleryItemList(List<GalleryItem> galleryItemList) {
        this.galleryItemList = galleryItemList;
    }
}
