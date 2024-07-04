//package com.apc.webadmin.services;
//
//import com.apc.webadmin.database.SequenceGeneratorService;
//import com.apc.webadmin.dto.TransactionResponse;
//import com.apc.webadmin.models.Category;
//import com.apc.webadmin.models.CategoryGroup;
//import com.apc.webadmin.models.Transaction;
//import com.apc.webadmin.models.User;
//import com.apc.webadmin.repositories.TransactionRepository;
//import com.apc.webadmin.utils.DateUtils;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
//@Service
//public class TransactionService {
//    @Autowired
//    TransactionRepository transactionRepository;
//    @Autowired
//    SequenceGeneratorService sequenceGeneratorService;
//    public Transaction insert(Transaction newTransaction)
//    {
//        Long id  = sequenceGeneratorService.generateSequence(Transaction.SEQUENCE_NAME);
//        newTransaction.setId(id);
//        newTransaction.setActive(1);
//        newTransaction.setCreatedDate(DateUtils.getCurrentDate());
//        return transactionRepository.insert(newTransaction);
//    }
//
//    public Transaction findById(Long id)
//    {
//        Optional<Transaction> optionalTransaction =  transactionRepository.findById(id);
//        return optionalTransaction.orElse(null);
//    }
//    public Transaction update(Transaction updateTransaction)
//    {
//        Optional<Transaction> optionalTransaction = transactionRepository.findById(updateTransaction.getId());
//        if(optionalTransaction.isEmpty())
//        {
//            return null;
//        }
//        Transaction foundTransaction = optionalTransaction.get();
//        foundTransaction.setMoney(updateTransaction.getMoney());
//        foundTransaction.setName(updateTransaction.getName());
//        foundTransaction.setWithPerson(updateTransaction.getWithPerson());
//        return transactionRepository.save(foundTransaction);
//    }
//    public boolean delete(long idTransaction)
//    {
//        Optional<Transaction> optionalTransaction = transactionRepository.findById(idTransaction);
//        if(optionalTransaction.isEmpty())
//        {
//            return false;
//        }
//        Transaction foundTransaction = optionalTransaction.get();
//        foundTransaction.setActive(0);
//        Transaction updateTransaction = transactionRepository.save(foundTransaction);
//        return true;
//    }
//    @Autowired
//    CategoryGroupService  categoryGroupService;
//    @Autowired
//    UserService userService;
//    public TransactionResponse convertTransaction(Transaction origin)
//    {
//        TransactionResponse transactionResponse = new TransactionResponse();
//        transactionResponse.setActive(origin.getActive());
//        Category category = null;
//        try{
//            category = categoryGroupService.getCategoryById(origin.getCategoryID());
//
//        }catch (Exception ex){
//
//        }
//
//        CategoryGroup group = null;
//
//        try{
//            group = categoryGroupService.findById(origin.getGroupID());
//
//        }catch (Exception ex){
//
//        }
//
//        User user = null;
//        user = userService.findById(origin.getUserID());
//        if(category != null){
//            transactionResponse.setCategory(category.getName());
//            transactionResponse.setCategoryID(origin.getCategoryID());
//
//        }
//        transactionResponse.setId(origin.getId());
//        transactionResponse.setMoney(origin.getMoney());
//        transactionResponse.setListImages(origin.getListImages());
//        transactionResponse.setCreatedDate(origin.getCreatedDate());
//        transactionResponse.setNote(origin.getNote());
//        transactionResponse.setUserId(origin.getUserID());
//        if(user!=null){
//           // transactionResponse.setUsername(user.getUsername());
//
//        }
//        if(group != null){
//            transactionResponse.setGroupID(origin.getGroupID());
//            transactionResponse.setGroup(group.getName());
//
//        }
//        transactionResponse.setWithPerson(origin.getWithPerson());
//        transactionResponse.setName(origin.getName());
//        return  transactionResponse;
//    }
//
//    public List<Transaction> findAll()
//    {
//        return transactionRepository.findAll();
//    }
//    public List<TransactionResponse> findAllResponse()
//    {
//        List <Transaction > transactionList =transactionRepository.findAll();
//        List<TransactionResponse> transactionResponses = new ArrayList<>();
//        for(Transaction transaction: transactionList)
//        {
//            TransactionResponse dto = convertTransaction(transaction);
//            transactionResponses.add(dto);
//        }
//        return transactionResponses;
//    }
//    public List<Transaction> findByUserID(Long userID)
//    {
//        return transactionRepository.findAllByUserID(userID);
//    }
//    public List<Transaction> findByDate(Long startDate, Long endDate, Long userID)
//    {
//        return transactionRepository.findTransactionsByDateAndUser(startDate, endDate, userID);
//    }
//    public List<Transaction> findByDateRange(Long startDate, Long endDate)
//    {
//        return transactionRepository.findTransactionsByDateRange(startDate, endDate);
//    }
//
//
//    public List<Transaction> findByDate(Long startDate, Long endDate)
//    {
//        List<Transaction> listAll = new ArrayList<>();
//        listAll = findAll();
//        List<Transaction> listFilter = new ArrayList<>();
//        for(Transaction transaction: listAll)
//        {
//            if(transaction.getCreatedDate()>= startDate && transaction.getCreatedDate()<= endDate)
//            {
//                listFilter.add(transaction);
//            }
//        }
//        return  listFilter;
//        //return transactionRepository.findTransactionsByDateRange(startDate, endDate);
//    }
//}
