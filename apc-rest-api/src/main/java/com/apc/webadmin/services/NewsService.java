package com.apc.webadmin.services;


import com.apc.webadmin.database.SequenceGeneratorService;
import com.apc.webadmin.models.News;
import com.apc.webadmin.repositories.NewsRepository;
import com.apc.webadmin.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NewsService {
    @Autowired
    NewsRepository newsRepository;
    @Autowired
    SequenceGeneratorService sequenceGeneratorService;
    public List<News> findAll(){
        return newsRepository.findAll();
    }
    public News create(News news){
        Long id = sequenceGeneratorService.generateSequence(News.SEQUENCE_NAME);
        news.setId(id);
        news.setCreatedDate(DateUtils.getCurrentDate());
        return newsRepository.insert(news);
    }

    public News update(News news){
        Optional<News> optional = newsRepository.findById(news.getId());
        if(optional.isEmpty()) return null;
        News found = optional.get();
        found.setActive(true);
        found.setTitle(news.getTitle());
        found.setSubTitle(news.getSubTitle());
        found.setCategory(news.getCategory());
        found.setJsonData(news.getJsonData());
        return newsRepository.save(found);
    }



}
