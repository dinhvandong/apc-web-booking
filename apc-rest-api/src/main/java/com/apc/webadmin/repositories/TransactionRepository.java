package com.apc.webadmin.repositories;

import com.apc.webadmin.models.Transaction;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

//public interface TransactionRepository extends MongoRepository<Transaction, Long> {
//    List<Transaction> findAllByUserID(Long userID);
//    @Query("{'createdDate': {$gte: ?0, $lte: ?1}, 'userID': ?2}")
//    List<Transaction> findTransactionsByDateAndUser(Long fromDate, Long toDate, Long userID);
//    @Query("{'createdDate': {$gte: ?0, $lte: ?1}}")
//    List<Transaction> findTransactionsByDateRange(Long fromDate, Long toDate);
//}
