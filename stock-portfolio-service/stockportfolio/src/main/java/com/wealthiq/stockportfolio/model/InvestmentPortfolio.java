package com.wealthiq.stockportfolio.model;

import jakarta.persistence.*;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "investment_portfolio")
public class InvestmentPortfolio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "investment_portfolio_id")
    private Long id;

    // Define the one-to-many relationship with Investment
    @OneToMany(mappedBy = "investmentPortfolio", cascade = CascadeType.ALL)
    private List<Investment> investments;

    @OneToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User user;

    public InvestmentPortfolio() {
    }

    public InvestmentPortfolio(Long id, List<Investment> investments) {
        this.id = id;
        this.investments = investments;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Investment> getInvestments() {
        return investments;
    }

    public void setInvestments(List<Investment> investments) {
        this.investments = investments;
    }

    public void addInvestmentToPortfolio(Long id, Investment investment) {
        investments.add(investment);
        investment.setInvestmentPortfolio(this);
    }

}