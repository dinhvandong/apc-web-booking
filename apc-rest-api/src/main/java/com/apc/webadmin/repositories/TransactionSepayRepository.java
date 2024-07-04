package com.apc.webadmin.repositories;

import com.apc.webadmin.models.TransactionSePay;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TransactionSepayRepository extends MongoRepository<TransactionSePay, Long>
{

}
