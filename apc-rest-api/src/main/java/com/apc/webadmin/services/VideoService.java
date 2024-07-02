package com.apc.webadmin.services;


import com.apc.webadmin.database.SequenceGeneratorService;
import com.apc.webadmin.models.News;
import com.apc.webadmin.models.Video;
import com.apc.webadmin.repositories.VideRepository;
import com.apc.webadmin.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VideoService {
    @Autowired
    VideRepository videRepository;
    @Autowired
    SequenceGeneratorService sequenceGeneratorService;
    public List<Video> findAll(){
        return videRepository.findAll();
    }

    public Video create(Video news)
    {
        Long id = sequenceGeneratorService.generateSequence(Video.SEQUENCE_NAME);
        news.setId(id);
        return videRepository.insert(news);
    }
    public boolean delete(Long id){

        videRepository.deleteById(id);
        return  true;
    }

    public boolean deleteAll()
    {
        videRepository.deleteAll();
        return true;
    }

    public Video findById(Long id)
    {
        Optional<Video> optional = videRepository.findById(id);
        if(optional.isEmpty()) return null;
        return optional.get();
    }

    public Video update(Video news)
    {
        Optional<Video> optional = videRepository.findById(news.getId());
        if(optional.isEmpty()) return null;
        Video found = optional.get();
        found.setTitle(news.getTitle());
        found.setDesc(news.getDesc());
        return videRepository.save(found);
    }

}
