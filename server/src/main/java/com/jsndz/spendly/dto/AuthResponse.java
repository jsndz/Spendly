package com.jsndz.spendly.dto;

public class AuthResponse {

    private UserResponse user;

    public AuthResponse(UserResponse user) {
        this.user = user;
    }

    public UserResponse getUser() {
        return user;
    }
}