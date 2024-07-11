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
import java.util.regex.Matcher;
import java.util.regex.Pattern;

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


    public static String extractValue(String input) {
        String pattern = "DC(\\w+)";
        Pattern regex = Pattern.compile(pattern);
        Matcher matcher = regex.matcher(input);

        if (matcher.find()) {
            return matcher.group(1);
        }

        return null; // or an appropriate default value if no match is found
    }
    @Scheduled(fixedRate = 10000) // Execute every minute (60000 milliseconds)
    public boolean updateDb(){
        ApiResponse apiResponse = getTransactions();
        List<TransactionSePay> transactionSePays = apiResponse.getTransactions();
        for(TransactionSePay item: transactionSePays){

            Optional<TransactionSePay> optional = findById(item.getId());
            if(optional.isEmpty()){
                String value = extractValue(item.getTransaction_content());
                item.setTransaction_content("DC"+value);
                create(item);
            }
        }
        return true;
    }

    public boolean deleteAll(){
        transactionSepayRepository.deleteAll();
        return true;
    }
//    public List<TransactionSePay> getTransactionsByContent(String transactionContent) {
//        return transactionSepayRepository.findAllByTransactionContent(transactionContent);
//    }



//    public List<TransactionSePay> getFirst100Transactions() {
//        Pageable pageable = PageRequest.of(0, 100);
//        return transactionSepayRepository.findFirst100ByIdNotNull(pageable);
//    }
}
