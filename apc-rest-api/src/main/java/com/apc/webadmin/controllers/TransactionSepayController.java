package com.apc.webadmin.controllers;

import com.apc.webadmin.dto.ResponseObject;
import com.apc.webadmin.models.ApiResponse;
import com.apc.webadmin.models.News;
import com.apc.webadmin.models.TransactionSePay;
import com.apc.webadmin.services.NewsService;
import com.apc.webadmin.services.TransactionSepayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = {
        "http://163.44.206.118:83",
        "http://163.44.206.118:80",
        "http://163.44.206.118",
        "http://163.44.206.118:81",
        "http://localhost:3001",
        "http://localhost:3000",
        "http://150.95.113.18",
        "http://ambassadordaycruise.com/",
        "http://admin.ambassadordaycruise.com/"

})
@RestController
@RequestMapping("/api/transaction_sepay")
public class TransactionSepayController {

    @Autowired
    TransactionSepayService transactionSepayService;

//    @PostMapping("/findAll")
//    public ResponseEntity<?> findAll()
//    {
//        List<TransactionSePay> response =  transactionSepayService.findAll();
//        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"success"));
//
//    }
    @GetMapping("/list")
    public ApiResponse getTransactions() {
        return transactionSepayService.getTransactions();
    }

//
//    @GetMapping("/findById")
//    public ResponseEntity<?> findById(@RequestParam Long id)
//    {
//        Optional<TransactionSePay> response =  transactionSepayService.findById(id);
//        if(response.isEmpty()){
//            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"not found"));
//        }else
//        {
//            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response.get(),"success"));
//
//        }
//
//    }
//    @PostMapping("/insert")
//    public ResponseEntity<?> insert(@RequestBody TransactionSePay news)
//    {
//        TransactionSePay response =  transactionSepayService.insert(news);
//        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"success"));
//    }
//
//    @PostMapping("/update")
//    public ResponseEntity<?> update(@RequestBody TransactionSePay updateNews)
//    {
//        TransactionSePay response =  transactionSepayService.update(updateNews);
//        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"Ok"));
//
//    }
}
