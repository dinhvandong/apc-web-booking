package com.apc.webadmin.services;

import com.apc.webadmin.database.SequenceGeneratorService;
import com.apc.webadmin.models.Itinerary;
import com.apc.webadmin.models.Notification;
import com.apc.webadmin.repositories.ItineraryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ItineraryService {
    @Autowired
    ItineraryRepository itineraryRepository;
    @Autowired
    SequenceGeneratorService sequenceGeneratorService;
    public Itinerary insert(Itinerary item)
    {
        Long id = sequenceGeneratorService.generateSequence(Notification.SEQUENCE_NAME);
        item.setId(id);
        return  itineraryRepository.insert(item);
    }
    public List<Itinerary> findAll()
    {
        return  itineraryRepository.findAll();
    }


    public boolean deleteAll(){
        itineraryRepository.deleteAll();
        return true;
    }
    public Optional<Itinerary> findById(Long id){
        return  itineraryRepository.findById(id);
    }

    public Itinerary update(Itinerary item)
    {
        Optional<Itinerary> optional =
                itineraryRepository.findById(item.getId());
        if(optional.isEmpty())
        {
            return null;
        }
        return  itineraryRepository.save(item);
    }
}
