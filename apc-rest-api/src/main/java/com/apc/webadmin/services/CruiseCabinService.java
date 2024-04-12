package com.apc.webadmin.services;


import com.apc.webadmin.database.SequenceGeneratorService;
import com.apc.webadmin.models.CruiseCabin;
import com.apc.webadmin.models.ItemCabin;
import com.apc.webadmin.repositories.CruiseCabinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CruiseCabinService {

    @Autowired
    CruiseCabinRepository cruiseCabinRepository;
    @Autowired
    SequenceGeneratorService sequenceGeneratorService;

    public CruiseCabin create(CruiseCabin cruiseCabin){
        Long idCabin = sequenceGeneratorService.generateSequence(CruiseCabin.SEQUENCE_NAME);
        cruiseCabin.setId(idCabin);
        return cruiseCabinRepository.insert(cruiseCabin);
    }

    public List<CruiseCabin> findAll(){
        return cruiseCabinRepository.findAllByActive(true);
    }
    public Optional<CruiseCabin> findById(Long id){
        return cruiseCabinRepository.findById(id);
    }
    public CruiseCabin update(CruiseCabin cruiseCabin){

        Optional<CruiseCabin> cruiseCabinOptional = cruiseCabinRepository.findById(cruiseCabin.getId());
        if(cruiseCabinOptional.isPresent()){
            CruiseCabin cruiseCabinFound = cruiseCabinOptional.get();
            cruiseCabinFound.setCruise(cruiseCabin.getCruise());
            cruiseCabinFound.setName(cruiseCabin.getName());
            cruiseCabinFound.setPrice(cruiseCabin.getPrice());
            return cruiseCabinRepository.save(cruiseCabinFound);
        }
        return null;
    }
    public CruiseCabin addItemCabin(Long cruiseId, List<ItemCabin> itemCabins){

        Optional<CruiseCabin> cruiseCabinOptional = cruiseCabinRepository.findById(cruiseId);
        if(cruiseCabinOptional.isPresent()){
            CruiseCabin cruiseCabinFound = cruiseCabinOptional.get();
            List<ItemCabin> itemCabinListAvaiable = new ArrayList<>();
            try {
                itemCabinListAvaiable = cruiseCabinFound.getItemCabinList();
                itemCabinListAvaiable.addAll(itemCabins);
            }catch (Exception ex){

            }

            cruiseCabinFound.setItemCabinList(itemCabinListAvaiable);
            return cruiseCabinRepository.save(cruiseCabinFound);
        }
        return null;
    }
}
