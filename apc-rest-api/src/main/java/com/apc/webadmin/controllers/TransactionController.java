package com.apc.webadmin.controllers;

import com.apc.webadmin.dto.ResponseObject;
import com.apc.webadmin.dto.TransactionResponse;
import com.apc.webadmin.jwt.JwtInterceptor;
import com.apc.webadmin.models.Transaction;
import com.apc.webadmin.services.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
@CrossOrigin(origins = "http://150.95.110.230")
@RestController
@RequestMapping("/api/transaction")
public class TransactionController {

    @Autowired
    TransactionService transactionService;
    @PostMapping("/findById")
    public ResponseEntity<?> insert(@RequestParam String token, @RequestParam Long idTransaction){

        if(token.isBlank())
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"transaction is not exist"));
        }
        token = "Bearer " + token;

        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if(isAuthenticated)
        {
            Transaction response =  transactionService.findById(idTransaction);
            if(response!= null){
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"transaction is not exist"));

            }else {
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"transaction is not exist"));
            }
        }
        else
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"transaction is not exist"));
        }

    }


    @PostMapping("/findByIdAndDate")
    public ResponseEntity<?> findByIdAndDate(@RequestParam String token,
                                             @RequestParam Long userId,
                                             @RequestParam Long startDate,
                                             @RequestParam Long endDate)
    {
        if(token.isBlank())
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"transaction is not exist"));
        }
        token = "Bearer " + token;

        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if(isAuthenticated)
        {
            List<Transaction> response =  transactionService.findByDate(startDate, endDate, userId);
            if(!response.isEmpty()){
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"transaction is not exist"));
            }
            else
            {
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"transaction is not exist"));
            }
        }
        else
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"transaction is not exist"));
        }
    }


    @PostMapping("/findAllByUserId")
    public ResponseEntity<?> findAllByUserId(@RequestParam String token,
                                             @RequestParam Long userId
                                             ) {
        if(token.isBlank())
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"transaction is not exist"));
        }
        token = "Bearer " + token;

        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if(isAuthenticated)
        {
            List<Transaction> response =  transactionService.findByUserID(userId);
            if(!response.isEmpty()){
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"transaction is not exist"));
            }
            else
            {
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"transaction is not exist"));
            }
        }
        else
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"transaction is not exist"));
        }
    }
    @PostMapping("/findAll")
    public ResponseEntity<?> findAll(@RequestParam String token)
    {
        if(token.isBlank())
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"transaction is not exist"));
        }
        token = "Bearer " + token;
        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if(isAuthenticated)
        {
            List<TransactionResponse> response =  transactionService.findAllResponse();
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"success"));
        }
        else
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"transaction is not exist"));
        }
    }
    @PostMapping("/findByDateRange")
    public ResponseEntity<?> findByDateRange(@RequestParam String token,
                                             @RequestParam Long startDate,
                                             @RequestParam Long endDate)
    {
        if(token.isBlank())
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"transaction is not exist"));
        }
        token = "Bearer " + token;

        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if(isAuthenticated)
        {
            List<Transaction> response =  transactionService.findByDateRange(startDate, endDate);
            if(!response.isEmpty()){
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"transaction is not exist"));

            }else {
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"transaction is not exist"));
            }
        }
        else
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"transaction is not exist"));
        }

    }


    @PostMapping("/insert")
    public ResponseEntity<?> insert(@RequestParam String token, @RequestBody Transaction newTransaction)
    {
        if(token.isBlank())
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"transaction is not exist"));
        }
        token = "Bearer " + token;

        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if(isAuthenticated)
        {
            Transaction response =  transactionService.insert(newTransaction);
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"transaction is not exist"));
        }
        else
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"transaction is not exist"));
        }
    }
    @PostMapping("/update")
    public ResponseEntity<?> update(@RequestParam String token, @RequestBody Transaction updateTransaction)
    {
        if(token.isBlank())
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"transaction is not exist"));
        }
        token = "Bearer " + token;
        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if(isAuthenticated)
        {
            Transaction response =  transactionService.update(updateTransaction);
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"transaction is not exist"));
        }
        else
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"transaction is not exist"));
        }
    }

    @PostMapping("/delete")
    public ResponseEntity<?> delete(@RequestParam String token, @RequestParam Long id){
        if(token.isBlank()){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"transaction not exist"));
        }
        token = "Bearer " + token;
        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if(isAuthenticated){
            Transaction foundUser = transactionService.findById(id);
            foundUser.setActive(0);
            Transaction response =  transactionService.update(foundUser);
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"transaction not exist"));
        }
        else
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"transaction not exist"));
        }
    }
}
