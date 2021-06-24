package com.company.Arrival.models;

import javax.validation.constraints.NotEmpty;
import java.util.Objects;

public class Business {

    @NotEmpty(message = "You must supply a value for artist")
    private String business;


    public String getBusiness() {
        return business;
    }

    public void setBusiness(String business) {
        this.business = business;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Business)) return false;
        Business business1 = (Business) o;
        return Objects.equals(getBusiness(), business1.getBusiness());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getBusiness());
    }

    @Override
    public String toString() {
        return "Business{" +
                "business='" + business + '\'' +
                '}';
    }
}
