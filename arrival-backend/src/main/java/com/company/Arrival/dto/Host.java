package com.company.Arrival.dto;

import javax.validation.constraints.NotEmpty;
import java.util.Objects;

public class Host {

    @NotEmpty(message = "You must supply a name for the business")
    private String businessName;
    @NotEmpty(message = "You must supply a name for the email")
    private String email;
    @NotEmpty(message = "You must supply a name for the password")
    private String password;

    public Host () {};

    public Host(String businessName, String email, String password) {
        this.businessName = businessName;
        this.email = email;
        this.password = password;
    }

    public String getBusinessName() {
        return businessName;
    }

    public void setBusinessName(String businessName) {
        this.businessName = businessName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Host)) return false;
        Host host = (Host) o;
        return Objects.equals(getBusinessName(), host.getBusinessName()) && Objects.equals(getEmail(), host.getEmail()) && Objects.equals(getPassword(), host.getPassword());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getBusinessName(), getEmail(), getPassword());
    }

    @Override
    public String toString() {
        return "Host{" +
                "businessName='" + businessName + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
