package com.apc.webadmin.models;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "transaction_sepay")
public class TransactionSePay {

    @Id
    private Long id;

    public static final String SEQUENCE_NAME = "transaction_sepay_sequence";


    private String gateway;

    private String transactionDate;

    private String accountNumber;

    private String code;

    private String content;

    private String transferType;

    private double transferAmount;

    private double accumulated;

    private String subAccount;

    private String referenceCode;

    private String description;

    // Constructors, getters, and setters

    // Example constructor
    public TransactionSePay(
   Long id, String gateway, String transactionDate,
  String accountNumber, String code, String content,
   String transferType, double transferAmount, double accumulated,
   String subAccount, String referenceCode, String description) {
        this.id = id;
        this.gateway = gateway;
        this.transactionDate = transactionDate;
        this.accountNumber = accountNumber;
        this.code = code;
        this.content = content;
        this.transferType = transferType;
        this.transferAmount = transferAmount;
        this.accumulated = accumulated;
        this.subAccount = subAccount;
        this.referenceCode = referenceCode;
        this.description = description;
    }

    public String getTransactionDate() {
        return transactionDate;
    }

    public void setTransactionDate(String transactionDate) {
        this.transactionDate = transactionDate;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getTransferType() {
        return transferType;
    }

    public void setTransferType(String transferType) {
        this.transferType = transferType;
    }

    public double getTransferAmount() {
        return transferAmount;
    }

    public void setTransferAmount(double transferAmount) {
        this.transferAmount = transferAmount;
    }

    public double getAccumulated() {
        return accumulated;
    }

    public void setAccumulated(double accumulated) {
        this.accumulated = accumulated;
    }

    public String getSubAccount() {
        return subAccount;
    }

    public void setSubAccount(String subAccount) {
        this.subAccount = subAccount;
    }

    public String getReferenceCode() {
        return referenceCode;
    }

    public void setReferenceCode(String referenceCode) {
        this.referenceCode = referenceCode;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    // Example getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getGateway() {
        return gateway;
    }

    public void setGateway(String gateway) {
        this.gateway = gateway;
    }

    // Other getters and setters for the remaining fields
}