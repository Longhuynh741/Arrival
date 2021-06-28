package com.company.Arrival.service;

import com.company.Arrival.dao.EventRepository;
import com.company.Arrival.dto.Event;
import com.company.Arrival.dto.Host;
import com.company.Arrival.dto.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service

public class ServiceLayer {

    @Autowired
    private EventRepository eventRepository;

    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }

    public Event getEventByCompanyName(String eventName) {
        return eventRepository.findByCompanyName(eventName);
    }

    public Event getEventById(Integer eventId) {
        return eventRepository.findByEventId(eventId);
    }

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

//    public void deleteEvent(Integer eventId) {
//        eventRepository.deleteById(eventId);
//    }

    public Event updateEvent(Integer EventId, String newEvent) {
        Event eventFromDb = eventRepository.findByEventId(EventId);
        eventFromDb.setEventName(newEvent);
        Event updateEvent = eventRepository.save(eventFromDb);
        return updateEvent;
    }
}
