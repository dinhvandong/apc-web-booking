package com.apc.webadmin.repositories;

import com.apc.webadmin.models.Notification;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface NotificationRepository
        extends MongoRepository<Notification, Long>
{
    List<Notification> findAllBySenderId(Long senderId);
   // List<Notification> findAllByReceivedId(Long receivedId);
}
