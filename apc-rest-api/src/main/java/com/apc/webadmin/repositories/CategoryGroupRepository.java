package com.apc.webadmin.repositories;

import com.apc.webadmin.models.CategoryGroup;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CategoryGroupRepository extends MongoRepository<CategoryGroup, Long> {

   // List<CategoryGroup> findAllByUserID(Long userID);

}
