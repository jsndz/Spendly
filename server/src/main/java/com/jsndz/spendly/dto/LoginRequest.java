package com.jsndz.spendly.dto;

import jakarta.validation.constraints.NotNull;


public class LoginRequest {

    @NotNull(message = "Email is required")
    public String email;

    @NotNull(message = "Password is required")
    public String password;
    public LoginRequest() {}

    public LoginRequest(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public String  getEmail(){
        return this.email;
    }
    public void   setEmail(String email ){
        this.email=email;
    }

    public String getPassword(){
        return this.password;
    }
    public void setPassword(String password ){
        this.password=password;
    }
}
