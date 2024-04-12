package com.apc.webadmin.services;


import com.apc.webadmin.database.SequenceGeneratorService;
import com.apc.webadmin.models.ItemCabin;
import com.apc.webadmin.repositories.ItemCabinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemCabinService {

    @Autowired
    ItemCabinRepository itemCabinRepository;

    @Autowired
    SequenceGeneratorService sequenceGeneratorService;


    public Optional<ItemCabin> findById(Long id){

        return itemCabinRepository.findById(id);
    }

    public ItemCabin create(ItemCabin itemCabin){

        Long id = sequenceGeneratorService.generateSequence(ItemCabin.SEQUENCE_NAME);
        itemCabin.setId(id);
        return itemCabinRepository.insert(itemCabin);
    }

    public List<ItemCabin> findAll(){

        return itemCabinRepository.findAll();
    }

    public ItemCabin update(ItemCabin itemCabin){
        Optional<ItemCabin> optionalItemCabin = itemCabinRepository.findById(itemCabin.getId());
        if(optionalItemCabin.isPresent()){

            ItemCabin itemCabinFound = optionalItemCabin.get();

            itemCabinFound.setLabel(itemCabin.getLabel());
            itemCabinFound.setActive(true);
            return itemCabinRepository.save(itemCabinFound);
        }
        return  null;
    }
}
