package com.wealthiq.stockportfolio.model;

import jakarta.persistence.*;

@Entity
@Table(name = "users") // Make sure this matches your existing table name
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Integer userId;

    @Column(unique = true)
    private String username;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private Portfolio portfolio;

    public User() {
    }

    public Portfolio getPortfolio() {
        return this.portfolio;
    }

    public void setPortfolio(Portfolio portfolio2) {
        this.portfolio = portfolio2;
    }

    // Getters and setters
}
