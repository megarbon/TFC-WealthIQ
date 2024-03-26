package com.wealthiq.stockportfolio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.wealthiq.stockportfolio.model.Portfolio;
import com.wealthiq.stockportfolio.service.PortfolioService;

@RestController
@RequestMapping("/portfolios")
public class PortfolioController {

    @GetMapping("/user/{userId}")
    public Portfolio getPortfolioByUserId(@PathVariable Integer userId) {
        return portfolioService.getPortfolioByUserId(userId);
    }

    @Autowired
    private PortfolioService portfolioService;

    @GetMapping("/{id}")
    public Portfolio getPortfolio(@PathVariable Long id) {
        return portfolioService.getPortfolioById(id);
    }

    @PostMapping
    public Portfolio createPortfolio(@RequestBody Portfolio portfolio) {
        return portfolioService.savePortfolio(portfolio);
    }

    @DeleteMapping("/{id}")
    public void deletePortfolio(@PathVariable Long id) {
        portfolioService.deletePortfolio(id);
    }
}
