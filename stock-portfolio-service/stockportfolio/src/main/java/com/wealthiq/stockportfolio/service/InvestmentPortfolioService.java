package com.wealthiq.stockportfolio.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wealthiq.stockportfolio.model.InvestmentPortfolio;
import com.wealthiq.stockportfolio.repository.InvestmentPortfolioRepository;

@Service
public class InvestmentPortfolioService {

    @Autowired
    private InvestmentPortfolioRepository portfolioRepository;

    public InvestmentPortfolio getPortfolioById(Long id) {
        return portfolioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Portfolio not found"));
    }

    public InvestmentPortfolio savePortfolio(InvestmentPortfolio portfolio) {
        return portfolioRepository.save(portfolio);
    }

    public void deletePortfolio(Long id) {
        portfolioRepository.deleteById(id);
    }

    /*
     * public Portfolio getPortfolioByUserId(Integer userId) {
     * return portfolioRepository.findByUserId(userId);
     * }
     */

    public List<InvestmentPortfolio> getAllPortfolios() {
        return portfolioRepository.findAll();
    }
}
