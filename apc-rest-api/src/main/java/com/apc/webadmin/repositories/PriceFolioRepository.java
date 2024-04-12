package com.apc.webadmin.repositories;

import com.apc.webadmin.models.PriceFolio;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

public interface PriceFolioRepository extends MongoRepository<PriceFolio, Long>
{

    List<PriceFolio> findAllByActive(boolean active);

    Optional<PriceFolio> findByRoomType(String roomType);
    PriceFolio findByRoomID(Long roomID);


}
