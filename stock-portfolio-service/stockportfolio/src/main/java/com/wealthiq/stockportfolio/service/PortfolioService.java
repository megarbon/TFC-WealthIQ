package com.wealthiq.stockportfolio.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wealthiq.stockportfolio.model.Portfolio;
import com.wealthiq.stockportfolio.repository.PortfolioRepository;

@Service
public class PortfolioService {

    @Autowired
    private PortfolioRepository portfolioRepository;

    public Portfolio getPortfolioById(Long id) {
        return portfolioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Portfolio not found"));
    }

    public Portfolio savePortfolio(Portfolio portfolio) {
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

    public List<Portfolio> getAllPortfolios() {
        return portfolioRepository.findAll();
    }
}
