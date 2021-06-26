package com.company.Arrival.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Entity;
import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.*;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name="event")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer eventId;
    @NotEmpty(message = "You must provide the name of your company")
    private String companyName;
    @NotEmpty(message = "You must supply a name for the event")
    private String eventName;
    @NotEmpty(message = "You must supply a name for the main host")
    private String mainHost;
    @NotEmpty(message = "You must supply a location")
    private String location;
    private String moreDetails;
    private List<String> questions;

    public Event() {}




    public Event(Integer id, String companyName, String eventName, String mainHost, String location, String moreDetails, List<String> questions) {
        this.eventId = eventId;
        this.companyName = companyName;
        this.eventName = eventName;
        this.mainHost = mainHost;
        this.location = location;
        this.moreDetails = moreDetails;
        this.questions = Collections.unmodifiableList(new ArrayList<>(questions));
    }

    public Integer getEventId() {
        return eventId;
    }

    public void setEventId(Integer eventId) {
        this.eventId = eventId;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }


    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public String getMainHost() {
        return mainHost;
    }

    public void setMainHost(String mainHost) {
        this.mainHost = mainHost;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getMoreDetails() {
        return moreDetails;
    }

    public void setMoreDetails(String moreDetails) {
        this.moreDetails = moreDetails;
    }

    public List<String> getQuestions() {
        return questions;
    }

    public void setQuestions(List<String> questions) {
        this.questions = questions;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Event event = (Event) o;
        return Objects.equals(eventId, event.eventId) && Objects.equals(companyName, event.companyName) && Objects.equals(eventName, event.eventName) && Objects.equals(mainHost, event.mainHost) && Objects.equals(location, event.location) && Objects.equals(moreDetails, event.moreDetails) && Objects.equals(questions, event.questions);
    }

    @Override
    public int hashCode() {
        return Objects.hash(eventId, companyName, eventName, mainHost, location, moreDetails, questions);
    }

    @Override
    public String toString() {
        return "Event{" +
                "eventId=" + eventId +
                ", companyName='" + companyName + '\'' +
                ", eventName='" + eventName + '\'' +
                ", mainHost='" + mainHost + '\'' +
                ", location='" + location + '\'' +
                ", moreDetails='" + moreDetails + '\'' +
                ", questions=" + questions +
                '}';
    }

}
