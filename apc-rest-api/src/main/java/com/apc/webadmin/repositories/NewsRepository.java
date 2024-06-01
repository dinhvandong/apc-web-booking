package com.apc.webadmin.repositories;

import com.apc.webadmin.models.Booking;
import com.apc.webadmin.models.News;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface NewsRepository extends MongoRepository<News, Long>
{
    List<News> findBy(Pageable pageable);
    List<News> findAllByCategory(String category);


}
