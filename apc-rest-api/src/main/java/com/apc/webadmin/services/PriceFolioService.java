package com.apc.webadmin.services;


import com.apc.webadmin.database.SequenceGeneratorService;
import com.apc.webadmin.models.PriceFolio;
import com.apc.webadmin.models.PriceTable;
import com.apc.webadmin.repositories.PriceFolioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PriceFolioService {
    @Autowired
    PriceFolioRepository priceFolioRepository;

    @Autowired
    SequenceGeneratorService sequenceGeneratorService;

    public PriceFolio create(PriceFolio priceFolio){

        System.out.println("CreateFolio");
        PriceFolio optionalPriceFolio = priceFolioRepository.findByRoomID(priceFolio.getRoomID());

        if(optionalPriceFolio == null){
            System.out.println("CreateFolio"+"OK1");

            Long id = sequenceGeneratorService.generateSequence(PriceFolio.SEQUENCE_NAME);
            priceFolio.setId(id);
            List<PriceTable> priceTableList = new ArrayList<>();
            for(int i = 0;i<100;i++){
                PriceTable priceTable = new PriceTable();
                Long id_price_table = sequenceGeneratorService.generateSequence(PriceTable.SEQUENCE_NAME);
                priceTable.setId(id_price_table);
                priceTable.setPriceUpdate(priceFolio.getPriceBase());
                priceTable.setPercentage(i+1);
                priceTableList.add(priceTable);
            }

            priceFolio.setPriceTableList(priceTableList);
            return priceFolioRepository.insert(priceFolio);
        }

        return  null;


    }

    public PriceFolio update(PriceFolio priceFolio){

        Optional<PriceFolio> optionalPriceFolio = priceFolioRepository.findById(priceFolio.getId());
        if(optionalPriceFolio.isEmpty()){

            return null;
        }
        PriceFolio priceFolioFound = optionalPriceFolio.get();
        priceFolioFound.setActive(true);
        priceFolioFound.setRoomType(priceFolio.getRoomType());
        priceFolioFound.setPriceTableList(priceFolio.getPriceTableList());
        priceFolioFound.setPriceBase(priceFolioFound.getPriceBase());

        return priceFolioRepository.save(priceFolioFound);
    }


    public PriceFolio delete(Long id){
        Optional<PriceFolio> optionalPriceFolio = priceFolioRepository.findById(id);
        if(optionalPriceFolio.isEmpty()){
            return null;
        }
        PriceFolio priceFolioFound = optionalPriceFolio.get();
        priceFolioFound.setActive(true);
        return priceFolioRepository.save(priceFolioFound);
    }

    public List<PriceFolio> findAll(){

        return  priceFolioRepository.findAllByActive(true);
    }



    public PriceFolio findByRoomID(Long id){
        return priceFolioRepository.findByRoomID(id);
    }


    public Optional<PriceFolio> findById(Long id){
        return priceFolioRepository.findById(id);
    }
}
