package com.apc.webadmin.repositories;

import com.apc.webadmin.models.PriceTime;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;


public interface PriceTimeRepository extends MongoRepository<PriceTime, Long>
{
    boolean existsByDateTime(Long dateTime);
    Page<PriceTime> findAll(Pageable pageable);
    PriceTime findByDateTimeString(String dateTime);

    PriceTime findByDateTime(Long dateTime);



//    List<PriceTime> findAllByDateTimeGreaterThanEqualAndDateTimeLessThanEqual(Long startDateTime, Long endDateTime);

    List<PriceTime> findAllByDateTimeBetween(Long startDateTime, Long endDateTime);

    List<PriceTime> findAllByMonthTimeString(String monthTimeString);
}
