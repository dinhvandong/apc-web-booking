package com.apc.webadmin.repositories;

import com.apc.webadmin.models.EventPlan;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface EventPlanRepository extends MongoRepository<EventPlan, Long>
{

    public List<EventPlan> findAllByActive(boolean active);
    List<EventPlan> findAllByTypeAndActive(String type, boolean active);


}
