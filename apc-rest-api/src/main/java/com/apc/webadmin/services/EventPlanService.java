package com.apc.webadmin.services;

import com.apc.webadmin.database.SequenceGeneratorService;
import com.apc.webadmin.models.EventItem;
import com.apc.webadmin.models.EventItemChild;
import com.apc.webadmin.models.EventPlan;
import com.apc.webadmin.repositories.EventPlanRepository;
import com.apc.webadmin.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.event.ItemEvent;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EventPlanService {
    @Autowired
    EventPlanRepository eventPlanRepository;

    @Autowired
    SequenceGeneratorService sequenceGeneratorService;

    public EventPlan create(EventPlan eventPlan){
        Long id = sequenceGeneratorService.generateSequence(EventPlan.SEQUENCE_NAME);
        eventPlan.setId(id);
        eventPlan.setActive(true);
        eventPlan.setCreatedDate(DateUtils.getCurrentDate());
        return eventPlanRepository.insert(eventPlan);
    }

    public List<EventPlan> findAll(){
        return eventPlanRepository.findAll();
    }

    public List<EventItem> findAllEventItem(Long eventID){

        Optional<EventPlan> optionalEventPlan = eventPlanRepository.findById(eventID);
        if(optionalEventPlan.isEmpty()) return  null;

        EventPlan eventPlanFound = optionalEventPlan.get();
        return eventPlanFound.getEventItemList();
    }

    public List<EventItemChild> findAllEventItemChild(Long eventID, Long eventItemID){

        Optional<EventPlan> optionalEventPlan = eventPlanRepository.findById(eventID);
        if(optionalEventPlan.isEmpty()) return  null;

        EventPlan eventPlanFound = optionalEventPlan.get();
        List<EventItem> eventItemList = eventPlanFound.getEventItemList();

        Optional<EventItem> eventItemFirst = eventItemList.stream()
                .filter(eventItem -> eventItem.getId() == eventItemID)
                .findFirst();

        if (eventItemFirst.isPresent()) {
            EventItem eventItem = eventItemFirst.get();
            return eventItem.getEventItemChildList();
            // Use the person as per your requirements
        } else {
            // No person found with the desired ID
            return null;
        }
        //EventItem eventItemFound = eventItemList.stream().filter(eventItemID)
    }

    public Optional<EventPlan> findById(Long id){
        return eventPlanRepository.findById(id);
    }

    public  EventPlan deleteById(Long id){
        Optional<EventPlan> eventPlanOptional = eventPlanRepository.findById(id);
        if(eventPlanOptional.isPresent()){
            EventPlan eventPlanFound = eventPlanOptional.get();
            eventPlanFound.setActive(false);
            return eventPlanRepository.save(eventPlanFound);
        }
        return null;
    }

    public EventPlan update(EventPlan eventPlan)
    {
        Optional<EventPlan> optionalEventPlan = eventPlanRepository.findById(eventPlan.getId());
        if(optionalEventPlan.isPresent())
        {
            EventPlan eventPlanFound = optionalEventPlan.get();
            eventPlanFound.setActive(eventPlan.isActive());
            eventPlanFound.setIcon(eventPlan.getIcon());
            eventPlanFound.setActive(true);
            eventPlanFound.setName(eventPlan.getName());
            eventPlanFound.setSubName(eventPlan.getSubName());
            return eventPlanRepository.save(eventPlan);
        }
        return null;
    }


    public EventPlan addItemChild(Long id, Long itemID, List<EventItemChild> itemChild){

        Optional<EventPlan> optionalEventPlan = eventPlanRepository.findById(id);
        if(optionalEventPlan.isPresent()) {
            EventPlan eventPlanFound = optionalEventPlan.get();
            List<EventItem> eventItemListAvaiable = new ArrayList<>();
            eventItemListAvaiable =       eventPlanFound.getEventItemList();
            EventItem evItem = null;
            for(EventItem eventItem: eventItemListAvaiable){
                if(eventItem.getId() == itemID){
                    evItem = eventItem;
                    break;
                }
            }
            assert evItem != null;
            evItem.setEventItemChildList(itemChild);

            return eventPlanRepository.save(eventPlanFound);

        }
        return null;
    }

    public boolean deleteAll(){

        eventPlanRepository.deleteAll();
        return  true;
    }
    public EventPlan addItem(Long id, List<EventItem> itemEvents)
    {
        Optional<EventPlan> optionalEventPlan = eventPlanRepository.findById(id);
        if(optionalEventPlan.isPresent())
        {
            EventPlan eventPlanFound = optionalEventPlan.get();
            List<EventItem> eventItemListAvaiable = new ArrayList<>();
            eventItemListAvaiable =       eventPlanFound.getEventItemList();
            for(EventItem eventItem: itemEvents)
            {
                Long idItem = sequenceGeneratorService.generateSequence(EventItem.SEQUENCE_NAME);
                eventItem.setId(idItem);
                eventItemListAvaiable.add(eventItem);
            }
            eventPlanFound.setEventItemList(eventItemListAvaiable);
            return eventPlanRepository.save(eventPlanFound);
        }
        return  null;
    }

}
