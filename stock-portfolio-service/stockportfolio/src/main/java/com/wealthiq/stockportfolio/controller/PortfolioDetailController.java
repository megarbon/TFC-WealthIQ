package com.wealthiq.stockportfolio.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.wealthiq.stockportfolio.model.PortfolioDetail;
import com.wealthiq.stockportfolio.service.PortfolioDetailService;

@RestController
@RequestMapping("/portfolioDetails")
public class PortfolioDetailController {

    private final PortfolioDetailService portfolioDetailService;

    public PortfolioDetailController(PortfolioDetailService portfolioDetailService) {
        this.portfolioDetailService = portfolioDetailService;
    }

    @PostMapping("/add")
    public ResponseEntity<PortfolioDetail> addPortfolioDetail(@RequestBody PortfolioDetail portfolioDetail) {
        PortfolioDetail createdPortfolioDetail = portfolioDetailService.createPortfolioDetail(portfolioDetail);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdPortfolioDetail);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<PortfolioDetail>> getAllPortfolioDetails() {
        try {
            List<PortfolioDetail> portfolioDetails = portfolioDetailService.getAllPortfolioDetails();
            return new ResponseEntity<>(portfolioDetails, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<PortfolioDetail> getPortfolioDetailById(@PathVariable("id") Long id) {
        PortfolioDetail portfolioDetail = portfolioDetailService.getPortfolioDetailById(id);
        if (portfolioDetail == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(portfolioDetail, HttpStatus.OK);
    }
    
}
