package com.wealthiq.stockportfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wealthiq.stockportfolio.model.InvestmentPortfolio;

@Repository
public interface InvestmentPortfolioRepository extends JpaRepository<InvestmentPortfolio, Long> {

}
