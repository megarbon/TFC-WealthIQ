package com.wealthiq.stockportfolio.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "investment_portfolio")
public class InvestmentPortfolio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "investment_portfolio_id")
    private Long id;

    @OneToMany(mappedBy = "investmentPortfolio", cascade = CascadeType.ALL)
    @Column(name = "investments")
    private List<Investment> investments;

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

}