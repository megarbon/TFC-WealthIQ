package com.wealthiq.stockportfolio.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.wealthiq.stockportfolio.model.Portfolio;
import com.wealthiq.stockportfolio.service.PortfolioService;

import java.util.List;

@RestController
@RequestMapping("/portfolios")
public class PortfolioController {

    private final PortfolioService portfolioService;

    public PortfolioController(PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    @GetMapping("/getAll") // ✅
    public ResponseEntity<List<Portfolio>> getAllPortfolios() {
        try {
            List<Portfolio> portfolios = portfolioService.getAllPortfolios();
            return new ResponseEntity<>(portfolios, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/{id}") // ✅
    public ResponseEntity<Portfolio> getPortfolioById(@PathVariable("id") Long id) {
        Portfolio portfolio = portfolioService.getPortfolioById(id);
        if (portfolio == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(portfolio, HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Portfolio> updatePortfolio(@PathVariable("id") Long id, @RequestBody Portfolio portfolio) {
        try {
            // Set the ID of the portfolio
            portfolio.setId(id);

            // Update the portfolio
            Portfolio updatedPortfolio = portfolioService.savePortfolio(portfolio);

            // Check if the update was successful
            if (updatedPortfolio != null) {
                return ResponseEntity.ok(updatedPortfolio);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @PostMapping("/create")
    public ResponseEntity<?> createPortfolio(@RequestBody Portfolio portfolio) {
        try {
            // Create the portfolio
            Portfolio createdPortfolio = portfolioService.savePortfolio(portfolio);

            // Return a response with the created portfolio and status code 201 (CREATED)
            return ResponseEntity.status(HttpStatus.CREATED).body(createdPortfolio);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deletePortfolio(@PathVariable("id") Long id) {
        try {
            portfolioService.deletePortfolio(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}
