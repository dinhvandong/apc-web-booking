package com.apc.webadmin.repositories;

import com.apc.webadmin.models.ItemCabin;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ItemCabinRepository extends MongoRepository<ItemCabin, Long> {
}
