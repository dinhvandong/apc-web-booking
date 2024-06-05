package com.apc.webadmin.repositories;

import com.apc.webadmin.models.News;
import com.apc.webadmin.models.Promotion;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface PromotionRepository extends MongoRepository<Promotion, Long>
{
    List<Promotion> findBy(Pageable pageable);
    List<Promotion> findAllByCategory(String category);


}
