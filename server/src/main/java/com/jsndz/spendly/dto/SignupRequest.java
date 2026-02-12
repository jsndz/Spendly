package com.jsndz.spendly.dto;

import jakarta.validation.constraints.NotNull;

public class SignupRequest {

    @NotNull(message = "Email is required")
    private String email;

    @NotNull(message = "username is needed")
    private String name;

    @NotNull(message = "Password is required")
    private String password;

    public SignupRequest() {}

    public SignupRequest(String email, String password, String name) {
        this.email = email;
        this.password = password;
        this.name =name;
    }

    public String  getEmail(){
        return this.email;
    }
    public void   setEmail(String email ){
        this.email=email;
    }

    public String  getName(){
        return this.name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getPassword(){
        return this.password;
    }
    public void setPassword(String password ){
        this.password=password;
    }
}
