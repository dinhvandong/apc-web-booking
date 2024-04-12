package com.apc.webadmin.repositories;

import com.apc.webadmin.models.Service;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ServiceRepository extends MongoRepository<Service, Long>
{
}
