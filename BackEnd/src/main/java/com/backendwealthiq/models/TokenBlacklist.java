package com.backendwealthiq.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class TokenBlacklist {
    @Id
    private String token;

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
