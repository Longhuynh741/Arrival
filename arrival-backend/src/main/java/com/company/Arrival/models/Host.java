package com.company.Arrival.models;

import javax.validation.constraints.NotEmpty;

public class Host {
    @NotEmpty(message = "You must supply a name for the email")
    private String email;
    @NotEmpty(message = "You must supply a name for the password")
    private String password;

}
