package com.backendwealthiq.controllers.portfolio;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.backendwealthiq.models.portfolio.*;

import com.backendwealthiq.services.portfolio.*;

import java.util.List;

@RestController
@RequestMapping("/portfolios")
@CrossOrigin("*")

public class InvestmentPortfolioController {

    private final InvestmentPortfolioService portfolioService;

    public InvestmentPortfolioController(InvestmentPortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    @GetMapping("/getAll") // ✅
    public ResponseEntity<List<InvestmentPortfolio>> getAllPortfolios() {
        try {
            List<InvestmentPortfolio> portfolios = portfolioService.getAllPortfolios();
            return new ResponseEntity<>(portfolios, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/{id}") // ✅
    public ResponseEntity<InvestmentPortfolio> getPortfolioById(@PathVariable("id") Long id) {
        InvestmentPortfolio portfolio = portfolioService.getPortfolioById(id);
        if (portfolio == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(portfolio, HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<InvestmentPortfolio> updatePortfolio(@PathVariable("id") Long id,
            @RequestBody InvestmentPortfolio portfolio) {
        try {
            // Set the ID of the portfolio
            portfolio.setId(id);

            // Update the portfolio
            InvestmentPortfolio updatedPortfolio = portfolioService.savePortfolio(portfolio);

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
    public ResponseEntity<?> createPortfolio(@RequestBody InvestmentPortfolio portfolio) {
        try {
            // Create the portfolio
            InvestmentPortfolio createdPortfolio = portfolioService.savePortfolio(portfolio);

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

    @PutMapping("/addInvestment")
    public ResponseEntity<InvestmentPortfolio> addInvestmentToPortfolio(@RequestBody InvestmentRequest investmentRequest) {
        InvestmentPortfolio createdInvestment = portfolioService.addInvestmentToPortfolio(investmentRequest.getPortfolioId(),
                investmentRequest.getInvestment());
        return ResponseEntity.status(HttpStatus.CREATED).body(createdInvestment);
    }

    public static class InvestmentRequest {
        private Long portfolioId;
        private Investment investment;

        public Long getPortfolioId() {
            return portfolioId;
        }

        public void setPortfolioId(Long portfolioId) {
            this.portfolioId = portfolioId;
        }

        public Investment getInvestment() {
            return investment;
        }

        public void setInvestment(Investment investment) {
            this.investment = investment;
        }
    }
}
