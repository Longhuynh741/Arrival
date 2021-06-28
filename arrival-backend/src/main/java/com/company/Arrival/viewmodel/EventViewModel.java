package com.company.Arrival.viewmodel;

import java.util.ArrayList;
import java.util.*;

public class EventViewModel {
    private Integer eventId;
    private String companyName;
    private String eventName;
    private String mainHost;
    private String location;
    private String moreDetails;
    private ArrayList<String> questions;

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

    public ArrayList<String> getQuestions() {
        return questions;
    }

    public void setQuestions(ArrayList<String> questions) {
        this.questions = questions;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EventViewModel that = (EventViewModel) o;
        return Objects.equals(eventId, that.eventId) && Objects.equals(companyName, that.companyName) && Objects.equals(eventName, that.eventName) && Objects.equals(mainHost, that.mainHost) && Objects.equals(location, that.location) && Objects.equals(moreDetails, that.moreDetails) && Objects.equals(questions, that.questions);
    }

    @Override
    public int hashCode() {
        return Objects.hash(eventId, companyName, eventName, mainHost, location, moreDetails, questions);
    }
}
