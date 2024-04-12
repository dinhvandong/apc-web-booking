package com.apc.webadmin.repositories;

import com.apc.webadmin.models.EventPlan;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EventPlanRepository extends MongoRepository<EventPlan, Long>
{


}
