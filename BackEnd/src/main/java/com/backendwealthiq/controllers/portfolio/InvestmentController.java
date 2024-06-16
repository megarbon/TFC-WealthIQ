package com.backendwealthiq.controllers.portfolio;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.backendwealthiq.models.portfolio.*;
import com.backendwealthiq.services.portfolio.InvestmentService;

@RestController
@RequestMapping("/investments")
@CrossOrigin("*")
public class InvestmentController {

    private final InvestmentService portfolioDetailService;

    public InvestmentController(InvestmentService portfolioDetailService) {
        this.portfolioDetailService = portfolioDetailService;
    }

    @PostMapping("/add")
    public ResponseEntity<Investment> addInvestment(@RequestBody Investment investment) {
        try {
            Investment createdInvestment = portfolioDetailService.createPortfolioDetail(investment);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdInvestment);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


    @GetMapping("/getAll")
    public ResponseEntity<List<Investment>> getAllPortfolioDetails() {
        try {
            List<Investment> portfolioDetails = portfolioDetailService.getAllPortfolioDetails();
            return new ResponseEntity<>(portfolioDetails, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Investment> getPortfolioDetailById(@PathVariable("id") Long id) {
        Investment portfolioDetail = portfolioDetailService.getPortfolioDetailById(id);
        if (portfolioDetail == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(portfolioDetail, HttpStatus.OK);
    }

}
