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


    public boolean deleteAll()
    {
        newsRepository.deleteAll();
        return true;
    }


    public News findById(Long id){
        Optional<News> optional = newsRepository.findById(id);
        if(optional.isEmpty()) return null;

        return optional.get();
    }

    public News update(News news){
        Optional<News> optional = newsRepository.findById(news.getId());
        if(optional.isEmpty()) return null;
        News found = optional.get();
        found.setActive(true);
        found.setTitle(news.getTitle());
        found.setSubTitle(news.getSubTitle());
        found.setCategory(news.getCategory());
        found.setContent(news.getContent());
        return newsRepository.save(found);
    }



}
