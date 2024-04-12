package com.apc.webadmin.repositories;

import com.apc.webadmin.models.CruiseCabin;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CruiseCabinRepository extends MongoRepository<CruiseCabin, Long> {

    public List<CruiseCabin> findAllByActive(boolean active);
}
