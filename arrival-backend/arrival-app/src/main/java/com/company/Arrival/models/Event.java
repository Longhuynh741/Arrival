package com.company.Arrival.models;

import javax.validation.constraints.NotEmpty;
import java.util.Objects;

public class Event {

    @NotEmpty(message = "You must supply a name for the event")
    private String eventName;
    @NotEmpty(message = "You must supply a name for the main host")
    private String mainHost;
    @NotEmpty(message = "You must supply a location")
    private String location;
    private String moreDetails;

    public Event() {}

    public Event(String eventName, String mainHost, String location, String moreDetails) {
        this.eventName = eventName;
        this.mainHost = mainHost;
        this.location = location;
        this.moreDetails = moreDetails;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Event)) return false;
        Event event = (Event) o;
        return Objects.equals(getEventName(), event.getEventName()) && Objects.equals(getMainHost(), event.getMainHost()) && Objects.equals(getLocation(), event.getLocation()) && Objects.equals(getMoreDetails(), event.getMoreDetails());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getEventName(), getMainHost(), getLocation(), getMoreDetails());
    }

    @Override
    public String toString() {
        return "Event{" +
                "eventName='" + eventName + '\'' +
                ", mainHost='" + mainHost + '\'' +
                ", location='" + location + '\'' +
                ", moreDetails='" + moreDetails + '\'' +
                '}';
    }
}
