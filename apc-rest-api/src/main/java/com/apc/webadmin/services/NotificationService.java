package com.apc.webadmin.services;


import com.apc.webadmin.database.SequenceGeneratorService;
import com.apc.webadmin.models.Notification;
import com.apc.webadmin.repositories.NotificationRepository;
import com.apc.webadmin.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class NotificationService {
    @Autowired
    NotificationRepository notificationRepository;

    @Autowired
    SequenceGeneratorService sequenceGeneratorService;

    public Notification insert(Notification notification)
    {
        Long id = sequenceGeneratorService.generateSequence(Notification.SEQUENCE_NAME);
        notification.setId(id);
        notification.setCreatedDate(DateUtils.getCurrentDate());
        notification.setStatus(1);
        return  notificationRepository.insert(notification);
    }

    public List<Notification> findAll()
    {
        return  notificationRepository.findAll();
    }

    public Optional<Notification> findById(Long id){
        return  notificationRepository.findById(id);
    }

    public List<Notification> findAllBySenderID(Long senderID)
    {
        return  notificationRepository.findAllBySenderId(senderID);
    }

    public List<Notification> findAllByReceivedID(Long receivedID)
    {
        List<Notification> listAll = notificationRepository.findAll();
        List<Notification> listReturn = new ArrayList<>();
        for(Notification notification: listAll){
            if(notification.getReceivedId().contains(receivedID)){
                listReturn.add(notification);
            }
        }
        return  listReturn;
    }

    public Notification update(Notification notification)
    {
        Optional<Notification> optionalNotification =
                notificationRepository.findById(notification.getId());
        if(optionalNotification.isEmpty()) {
            return null;
        }
        return  notificationRepository.save(notification);
    }
}
