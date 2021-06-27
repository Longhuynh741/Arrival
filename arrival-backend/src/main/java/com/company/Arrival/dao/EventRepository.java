package com.company.Arrival.dao;

import com.company.Arrival.dto.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EventRepository extends JpaRepository<Event, Integer> {

    Event findByCompanyName(String companyName);
    List<Event> findByLocation(String location);
    List<Event> findByMainHost(String mainHost);
    Event findByEventId(Integer eventId);


}