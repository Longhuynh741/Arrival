package com.company.Arrival.dao;

import com.company.Arrival.dto.Event;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;


import java.util.List;
import java.util.Optional;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;


@RunWith(SpringRunner.class)
@SpringBootTest
public class EventRepositoryTest {

    private Event event1;
    private Event event2;
    private Event event3;
    @Autowired
    EventRepository eventRepository;

    @Before
    public void setUp() throws Exception {
        eventRepository.deleteAll();


         event1 = new Event();

            event1.setEventId(1);
            event1.setEventName("Earnings Report");
            event1.setMainHost("Trevor");
            event1.setCompanyName("Microsoft");
            event1.setLocation("Microsoft Center");
            event1.setMoreDetails("Q3 Earnings Report");

        event2 = new Event();

        event2.setEventId(2);
        event2.setEventName("Event 2");
        event2.setMainHost("Dan");
        event2.setCompanyName("Summers");
        event2.setLocation("555 Arrange");
        event2.setMoreDetails("Nothing");

        event3 = new Event();
        event3.setEventId(3);
        event3.setEventName("Event 3");
        event3.setMainHost("Dan");
        event3.setCompanyName("Summers");
        event3.setLocation("Microsoft Center");
        event3.setMoreDetails("Nothing");

    }


    @Test
    public void shouldAddAndGetEventFromDatabase() {

        event1 = eventRepository.save(event1);

        Event fromRepo = eventRepository.findById(event1.getEventId()).get();
        assertEquals(event1, fromRepo);
    }

    @Test
    public void shouldUpdateEventInDatabase(){
        eventRepository.save(event1);

        event1.setEventName("Testing");

        event1 = eventRepository.save(event1);

        Event fromRepo = eventRepository.findById(event1.getEventId()).get();
        assertEquals(event1, fromRepo);
    }

    @Test
    public void shouldDeleteCarFromDatabase(){
        event1 = eventRepository.save(event1);

        eventRepository.deleteById(event1.getEventId());

        Optional<Event> fromRepo = eventRepository.findById(event1.getEventId());

        assertFalse(fromRepo.isPresent());
    }

    @Test
    public void shouldFindEventByLocation(){


        eventRepository.save(event1);
        eventRepository.save(event2);
        eventRepository.save(event3);

        List<Event> eventList = eventRepository.findByLocation("Microsoft Center");
        List<Event> eventList2 = eventRepository.findByLocation("555 Arrange");

        assertEquals(2, eventList.size());
        assertEquals(1, eventList2.size());
    }


    @Test
    public void shouldFindEventByMainHost(){


        eventRepository.save(event1);
        eventRepository.save(event2);
        eventRepository.save(event3);

        List<Event> eventList = eventRepository.findByMainHost("Dan");
        List<Event> eventList2 = eventRepository.findByMainHost("Trevor");

        assertEquals(2, eventList.size());
        assertEquals(1, eventList2.size());
    }

}