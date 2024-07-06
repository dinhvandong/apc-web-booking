package com.apc.webadmin.repositories;

import com.apc.webadmin.models.ConfirmCode;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ConfirmCodeRepository extends MongoRepository<ConfirmCode, Long>
{

    ConfirmCode findBySecureCodeAndEmailAndType(String secureCode, String email, String type);

    ConfirmCode findBySecureCodeAndPathRandom(String secureCode, String pathRandom);
    ConfirmCode findBySecureCodeAndPathRandomAndStatus(String secureCode, String pathRandom, int status);
}
