package com.apc.webadmin.repositories;

import com.apc.webadmin.models.ConfirmCode;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ConfirmCodeRepository extends MongoRepository<ConfirmCode, Long>
{


}
