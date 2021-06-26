package com.company.Arrival.controller;
import com.company.Arrival.dao.EventRepository;
import com.company.Arrival.dto.Event;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@RestController
@RefreshScope
public class EventController {
    @Autowired
    private EventRepository eventRepo;

    @PostMapping("/events")
    @ResponseStatus(HttpStatus.CREATED)
    public Event createEvent(@RequestBody Event event) {
        System.out.println("Creating Event: " + event);
        return eventRepo.save(event);
    }

    @GetMapping(value = "/events")
    public List<Event> getAllEvents() {
        return eventRepo.findAll();
    }

    @GetMapping(value = "/{eventId}")
    public Event getEventById(@PathVariable int eventId) {
        Optional<Event> event =  eventRepo.findById(eventId);

        if (!event.isPresent()) {
            return null;
        }
            return event.get();
    }

    @PutMapping(value = "/{eventId}")
    public void updateEvent(@RequestBody Event event, @PathVariable int eventId) {
        if (event.getEventId() == null) {
            event.setEventId(eventId);
        }

        if(event.getEventId() != eventId) {
            throw new IllegalArgumentException("Event ID must match");
        }
        eventRepo.save(event);
    }

    @DeleteMapping(value = "/{eventId}")
    public void deleteEvent(@PathVariable Integer eventId) {
        eventRepo.deleteById(eventId);
    }

    @GetMapping(value = "/events/{companyName}")
    public List<Event> findByCompanyName(@PathVariable String companyName) {
        return eventRepo.findByCompanyName(companyName);
    }
}
