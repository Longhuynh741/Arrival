package com.company.Arrival.dao;

import com.company.Arrival.dto.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event, Integer> {

    List<Event> findByCompanyName(String companyName);
    List<Event> findByLocation(String location);
    List<Event> findByMainHost(String mainHost);
    List<Event> findByEventId(Integer eventId);


}