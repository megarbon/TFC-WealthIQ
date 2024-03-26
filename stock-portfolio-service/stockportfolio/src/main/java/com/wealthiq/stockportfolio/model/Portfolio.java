package com.wealthiq.stockportfolio.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "portfolio")
public class Portfolio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "client_id", referencedColumnName = "id_cliente")
    private User client;

    @OneToMany(mappedBy = "portfolio", cascade = CascadeType.ALL)
    private List<PortfolioDetail> portfolioDetails;

    public Portfolio() {
    }

    public Portfolio(Long id, User client, List<PortfolioDetail> portfolioDetails) {
        this.id = id;
        this.client = client;
        this.portfolioDetails = portfolioDetails;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getClient() {
        return client;
    }

    public void setClient(User client) {
        this.client = client;
    }

    public List<PortfolioDetail> getPortfolioDetails() {
        return portfolioDetails;
    }

    public void setPortfolioDetails(List<PortfolioDetail> portfolioDetails) {
        this.portfolioDetails = portfolioDetails;
    }

}
