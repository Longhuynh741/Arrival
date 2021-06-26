package com.company.Arrival.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name="event")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer eventId;
    private String companyName;
    private String eventName;
    private String mainHost;
    private String location;
    private String moreDetails;
    private ArrayList<String> questions;





    public Event() {}

    public Event(Integer eventId, String companyName, String eventName, String mainHost, String location, String moreDetails, ArrayList<String> questions) {
        this.eventId = eventId;
        this.companyName = companyName;
        this.eventName = eventName;
        this.mainHost = mainHost;
        this.location = location;
        this.moreDetails = moreDetails;
        this.questions = questions;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Event)) return false;
        Event event = (Event) o;
        return Objects.equals(getEventId(), event.getEventId()) && Objects.equals(getCompanyName(), event.getCompanyName()) && Objects.equals(getEventName(), event.getEventName()) && Objects.equals(getMainHost(), event.getMainHost()) && Objects.equals(getLocation(), event.getLocation()) && Objects.equals(getMoreDetails(), event.getMoreDetails()) && Objects.equals(getQuestions(), event.getQuestions());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getEventId(), getCompanyName(), getEventName(), getMainHost(), getLocation(), getMoreDetails(), getQuestions());
    }

    public List<String> getQuestions() {
        return questions;
    }

    public void setQuestions(ArrayList<String> questions) {
        this.questions = questions;
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




}
