package com.backendwealthiq.models;

public class AuthenticationRequestDTO {

    private String token;

    public AuthenticationRequestDTO() {
    }

    public AuthenticationRequestDTO(String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
