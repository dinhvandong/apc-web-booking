package com.apc.webadmin.models;

import java.util.List;

public class ApiResponse {
    private int status;
    private String error;
    private Messages messages;
    private List<TransactionSePay> transactions;

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }

    public Messages getMessages() {
        return messages;
    }

    public void setMessages(Messages messages) {
        this.messages = messages;
    }

    public List<TransactionSePay> getTransactions() {
        return transactions;
    }

    public void setTransactions(List<TransactionSePay> transactions) {
        this.transactions = transactions;
    }

    // Getters and setters
}