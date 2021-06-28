package com.company.Arrival.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertFalse;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.company.Arrival.dao.EventRepository;
import com.company.Arrival.dto.Event;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;





@RunWith(SpringRunner.class)
@SpringBootTest
public class ServiceLayerTest {
    @Autowired
    private ServiceLayer serviceLayer;

    @MockBean
    private EventRepository eventRepository;
    //private List<Event> eventList = new ArrayList<>();


    @Test
    public void createEventShouldReturnEventName() throws Exception{
        Event event = new Event();
        event.setEventId(9);
        event.setEventName("New event");
        event.setCompanyName("Target");
        event.setMainHost("New host");
        event.setLocation("new International Market");
        event.setMoreDetails("Check back later");

        Mockito.when(eventRepository.save(event)).thenReturn(event);
        assertThat(serviceLayer.createEvent(event)).isEqualTo(event);
    }

    @Test
    public void findEventByCompanyNameShouldReturnAllEventsInCompany() {

        Event event = new Event();
        event.setEventId(9);
        event.setEventName("New event");
        event.setCompanyName("eventList");
        event.setMainHost("New host");
        event.setLocation("new International Market");
        event.setMoreDetails("Check back later");

       Mockito.when(eventRepository.findByCompanyName("Target")).thenReturn(event);

       assertThat(serviceLayer.getEventByCompanyName("Target")).isEqualTo(event);
    }

    @Test
    public void findEventByEventIdShouldReturnEvent() {

        Event event = new Event();
        event.setEventId(9);
        event.setEventName("New event");
        event.setCompanyName("Target");
        event.setMainHost("New host");
        event.setLocation("new International Market");
        event.setMoreDetails("Check back later");

        Mockito.when(eventRepository.findByEventId(9)).thenReturn(event);

        assertThat(serviceLayer.getEventById(9)).isEqualTo(event);
    }

//    @Test
//    public void deleteByEventIdShouldDeleteEvent() {
//
//        Event event = new Event();
//        event.setEventId(9);
//        event.setEventName("New event");
//        event.setCompanyName("Target");
//        event.setMainHost("New host");
//        event.setLocation("new International Market");
//        event.setMoreDetails("Check back later");
//
//       // Mockito.when(eventRepository.findByEventId(9)).thenReturn(event);
//        Mockito.when(eventRepository.findByEventId(9)).thenReturn(event);
//        Mockito.when(eventRepository.exists(event.getEventById())).thenReturn(false);
//        assertFalse(eventRepository.exists(event.getEventId()));
//    }

    @Test
    public void updateEventByEventIdShouldReturnUpdatedEvent() {

        Event event = new Event();
        event.setEventId(9);
        event.setEventName("New event");
        event.setCompanyName("Target");
        event.setMainHost("New host");
        event.setLocation("new International Market");
        event.setMoreDetails("Check back later");

        Mockito.when(eventRepository.findByEventId(9)).thenReturn(event);
        event.setEventName("Farmer market");
        Mockito.when(eventRepository.save(event)).thenReturn(event);
        assertThat(serviceLayer.updateEvent(9,"New event")).isEqualTo(event);
    }
}