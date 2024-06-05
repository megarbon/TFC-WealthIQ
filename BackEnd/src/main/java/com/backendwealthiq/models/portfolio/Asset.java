package com.backendwealthiq.models.portfolio;

import jakarta.persistence.*;

@Entity
@Table(name = "stock")
public class Asset {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "stock_id")
    private Long id;

    @Column(name = "stock_name", nullable = false, unique = true)
    private String name;

    @Column(name = "stock_symbol", nullable = false, unique = true)
    private String symbol;

    @Column(name = "stock_market", nullable = false)
    private String market;

    public Asset() {
    }

    public Asset(Long id, String name, String symbol, String market) {
        this.id = id;
        this.name = name;
        this.symbol = symbol;
        this.market = market;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public String getMarket() {
        return market;
    }

    public void setMarket(String market) {
        this.market = market;
    }

}
