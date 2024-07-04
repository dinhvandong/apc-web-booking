package com.apc.webadmin.repositories;

import com.apc.webadmin.models.TransactionSePay;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TransactionSepayRepository extends MongoRepository<TransactionSePay, String>
{

//    List<TransactionSePay> findAllByTransactionContent(String transactionContent);
//    List<TransactionSePay> findFirst100ByIdNotNull(Pageable pageable);


}
