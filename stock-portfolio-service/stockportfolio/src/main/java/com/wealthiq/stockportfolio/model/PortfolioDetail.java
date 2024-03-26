package com.wealthiq.stockportfolio.model;

import jakarta.persistence.*;

@Entity
@Table(name = "portfolio_detail")
public class PortfolioDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "portfolio_id", referencedColumnName = "id")
    private Portfolio portfolio;

    @ManyToOne
    @JoinColumn(name = "stock_id", referencedColumnName = "id")
    private Stock stock;

    @Column(name = "amount")
    private int amount;

    // Other attributes as needed...

    public PortfolioDetail() {
    }

    public PortfolioDetail(Long id, Portfolio portfolio, Stock stock, int amount) {
        this.id = id;
        this.portfolio = portfolio;
        this.stock = stock;
        this.amount = amount;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Portfolio getPortfolio() {
        return portfolio;
    }

    public void setPortfolio(Portfolio portfolio) {
        this.portfolio = portfolio;
    }

    public Stock getStock() {
        return stock;
    }

    public void setStock(Stock stock) {
        this.stock = stock;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

}
