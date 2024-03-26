package com.wealthiq.stockportfolio.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long userId;

    @Column(nullable = false)
    private String username;

    @Column(nullable = true)
    private String password;

    @Column(nullable = true)
    private String email;

    @Column(nullable = true)
    private String profilePicUrl;

    @Column(nullable = true)
    private String bio;

    private InvestmentPortfolio portfolio;

    public User() {
    }

    public User(String username, String password, String email, String profilePicUrl, String bio) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.profilePicUrl = profilePicUrl;
        this.bio = bio;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getProfilePicUrl() {
        return profilePicUrl;
    }

    public void setProfilePicUrl(String profilePicUrl) {
        this.profilePicUrl = profilePicUrl;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public InvestmentPortfolio getPortfolio() {
        return portfolio;
    }

    public void setPortfolio(InvestmentPortfolio portfolio) {
        this.portfolio = portfolio;
    }
}
