package com.company.Arrival.controller;
import com.company.Arrival.dao.EventRepository;
import com.company.Arrival.dto.Event;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.ImportAutoConfiguration;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.cloud.autoconfigure.RefreshAutoConfiguration;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import java.util.ArrayList;
import java.util.List;
@RunWith(SpringRunner.class)
@WebMvcTest(EventController.class)
@ImportAutoConfiguration(RefreshAutoConfiguration.class)
public class EventControllerTest {
    @Autowired
    MockMvc mockMvc;
    @MockBean
    EventRepository eventRepo;
    ObjectMapper mapper = new ObjectMapper();
    private Event myEvent;
    private String eventJson;
    private List<Event> allEvents = new ArrayList<>();
    private String allEventsJson;
    private ArrayList<String> questions;
    private String questionsJson;
    @Before
    public void setup() throws Exception {
        myEvent = new Event();
        myEvent.setEventId(1);
        myEvent.setCompanyName("Cognizant");
        myEvent.setEventName("Game Night");
        myEvent.setMainHost("Dan");
        myEvent.setLocation("SMU Campus");
        myEvent.setMoreDetails("BYOB");
        eventJson = mapper.writeValueAsString(myEvent);
        Event event1 = new Event();
        event1.setEventId(2);
        event1.setCompanyName("This Co");
        event1.setEventName("Movie Night");
        event1.setMainHost("Hermit");
        event1.setLocation("Sesame St");
        event1.setMoreDetails("Bring chairs.");
        allEvents.add(myEvent);
        allEvents.add(event1);
        allEventsJson = mapper.writeValueAsString(allEvents);
//        questionsJson = mapper.writeValueAsString(questions);
//
//        questions = new ArrayList<>(Arrays.asList(
//                questions.add("Do you like board games?"),
//                questions.add("Do you like video games?"),
//                questions.add("Do you like Pizza?")
//        ));
    }
    @Test
    public void shouldCreateNewEventOnPost() throws Exception {
        Event input = new Event();
        input.setEventId(3);
        input.setCompanyName("TikTok");
        input.setEventName("Dance Party");
        input.setMainHost("Ellen");
        input.setLocation("Miami Beach");
        input.setMoreDetails("Dress for warm weather");
        String inputJson = mapper.writeValueAsString(input);
        given(eventRepo.save(input)).willReturn(myEvent);
        mockMvc.perform(
                post("/events")
                        .content(inputJson)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated())
                .andExpect(content().json(eventJson));
    }
    @Test
    public void shouldUpdateEvent() throws Exception {
        mockMvc.perform(
                put("/events/1")
                        .content(eventJson)
                        .contentType(MediaType.APPLICATION_JSON)
        )
                .andExpect(status().isOk());
    }
    @Test
    public void shouldDeleteEvent() throws Exception {
        mockMvc.perform(delete("/events/1"))
                .andExpect(status().isOk());
    }
    @Test
    public void shouldReturnAllEvents() throws Exception {
        given(eventRepo.findAll()).willReturn(allEvents);
        mockMvc.perform(
                get("/events"))
                .andExpect(status().isOk())
                .andExpect(content().json(allEventsJson)
                );
    }
//    @Test
//    public void shouldReturnEventsByCompany() throws Exception {
//        given(eventRepo.findByCompanyName("Cognizant"))
//                .willReturn(allEvents);
//    }

    @Test
    public void shouldReturnEventsByCompany() throws Exception {
        given(eventRepo.findByCompanyName("Cognizant"))
                .willReturn((Event) allEvents);
    }

}
