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
    public static final String SEQUENCE_NAME = "gallery_sequence";
    private String topic;

    private List<GalleryItem> galleryItemList;


}
