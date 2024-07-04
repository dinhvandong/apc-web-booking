package com.apc.webadmin.services;


import com.apc.webadmin.database.SequenceGeneratorService;
import com.apc.webadmin.models.ApiResponse;
import com.apc.webadmin.models.Notification;
import com.apc.webadmin.models.TransactionSePay;
import com.apc.webadmin.repositories.TransactionSepayRepository;
import com.apc.webadmin.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TransactionSepayService {

    @Autowired
    TransactionSepayRepository transactionSepayRepository;

    public List<TransactionSePay> findAll()
    {
        return  transactionSepayRepository.findAll();
    }
//




    private final WebClient webClient;


    public TransactionSepayService() {
        String authorizationToken = "VDFNABSHVPQX2FGODVRWM9YNTLCGP5Z18IEDAKPKZMXPBQY74KWX8HDUB03OZIIY";
        this.webClient = WebClient.builder()
                .baseUrl("https://my.sepay.vn/userapi/transactions/list")
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .defaultHeader(HttpHeaders.AUTHORIZATION, "Bearer " + authorizationToken)
                .build();
    }

    public ApiResponse getTransactions() {
        return webClient.get()
                .retrieve()
                .bodyToMono(ApiResponse.class)
                .block();
    }

    public TransactionSePay create (TransactionSePay item){

        return transactionSepayRepository.insert(item);
    }



    public Optional<TransactionSePay> findById(String id){
        return transactionSepayRepository.findById(id);
    }

    @Scheduled(fixedRate = 10000) // Execute every minute (60000 milliseconds)
    public void updateDb(){
        ApiResponse apiResponse = getTransactions();
        List<TransactionSePay> transactionSePays = apiResponse.getTransactions();
        for(TransactionSePay item: transactionSePays){

            Optional<TransactionSePay> optional = findById(item.getId());
            if(optional.isEmpty()){

                //TransactionSePay newItem = item;
                if(item.getTransactionContent().contains("QR"))
                {
                    String content = item.getTransactionContent();
                    String [] arrayContent = content.split(" ");
                    item.setTransactionContent(arrayContent[1]);

                }else
                {

                    String content = item.getTransactionContent();
                    String [] arrayContent = content.split(" ");
                    item.setTransactionContent(arrayContent[0]);
                }

                create(item);
            }
        }
    }

    public List<TransactionSePay> getTransactionsByContent(String transactionContent) {
        return transactionSepayRepository.findAllByTransactionContent(transactionContent);
    }



    public List<TransactionSePay> getFirst100Transactions() {
        Pageable pageable = PageRequest.of(0, 100);
        return transactionSepayRepository.findFirst100ByIdNotNull(pageable);
    }
}
