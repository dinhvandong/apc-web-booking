package com.apc.webadmin.models;

import org.springframework.data.annotation.Id;

public class GalleryItem {
    @Id
    private Long id;
    private String url;
    private String description;
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
