package com.backendwealthiq.models.portfolio;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "investment")
public class Investment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "investment_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "investment_portfolio_id")
    private InvestmentPortfolio investmentPortfolio;

    @ManyToOne
    @JoinColumn(name = "asset_id")
    private Asset asset;

    @Column(name = "amount")
    private int amount;

    public Investment() {
    }

    public Investment(InvestmentPortfolio investmentPortfolio, Asset asset, int amount) {
        this.investmentPortfolio = investmentPortfolio;
        this.asset = asset;
        this.amount = amount;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public InvestmentPortfolio getInvestmentPortfolio() {
        return investmentPortfolio;
    }

    public void setInvestmentPortfolio(InvestmentPortfolio investmentPortfolio) {
        this.investmentPortfolio = investmentPortfolio;
    }

    public Asset getAsset() {
        return asset;
    }

    public void setAsset(Asset asset) {
        this.asset = asset;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }
}
