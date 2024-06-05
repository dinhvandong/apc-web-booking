package com.apc.webadmin.services;


import com.apc.webadmin.database.SequenceGeneratorService;
import com.apc.webadmin.models.News;
import com.apc.webadmin.models.Promotion;
import com.apc.webadmin.repositories.NewsRepository;
import com.apc.webadmin.repositories.PromotionRepository;
import com.apc.webadmin.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PromotionService {
    @Autowired
    PromotionRepository promotionRepository;
    @Autowired
    SequenceGeneratorService sequenceGeneratorService;
    public List<Promotion> findAll(){
        return promotionRepository.findAll();
    }

    public List<Promotion> findAllByCategory(String category){
        return promotionRepository.findAllByCategory(category);
    }
    public Promotion create(Promotion news){
        Long id = sequenceGeneratorService.generateSequence(Promotion.SEQUENCE_NAME);
        news.setId(id);
        news.setCreatedDate(DateUtils.getCurrentDate());
        return promotionRepository.insert(news);
    }


    public boolean deleteAll()
    {
        promotionRepository.deleteAll();
        return true;
    }


    public Promotion findById(Long id){
        Optional<Promotion> optional = promotionRepository.findById(id);
        if(optional.isEmpty()) return null;

        return optional.get();
    }

    public Promotion update(Promotion news){
        Optional<Promotion> optional = promotionRepository.findById(news.getId());
        if(optional.isEmpty()) return null;
        Promotion found = optional.get();
        found.setActive(true);
        found.setTitle(news.getTitle());
        found.setSubTitle(news.getSubTitle());
        found.setCategory(news.getCategory());
        found.setContent(news.getContent());
        return promotionRepository.save(found);
    }



}
