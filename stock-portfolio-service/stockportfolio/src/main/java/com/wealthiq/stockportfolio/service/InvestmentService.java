package com.wealthiq.stockportfolio.service;

import org.springframework.stereotype.Service;
import java.util.List;
import java.util.NoSuchElementException;
import com.wealthiq.stockportfolio.model.Investment;
import com.wealthiq.stockportfolio.repository.InvestmentRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class InvestmentService {
    private final InvestmentRepository portfolioDetailRepository;

    public InvestmentService(InvestmentRepository portfolioDetailRepository) {
        this.portfolioDetailRepository = portfolioDetailRepository;
    }

    public List<Investment> getAllPortfolioDetails() {
        return portfolioDetailRepository.findAll();
    }

    public Investment getPortfolioDetailById(Long id) {
        return portfolioDetailRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Portfolio detail not found with id: " + id));
    }

    public Investment createPortfolioDetail(Investment portfolioDetail) {
        return portfolioDetailRepository.save(portfolioDetail);
    }

    public void deletePortfolioDetail(Long id) {
        if (portfolioDetailRepository.existsById(id)) {
            portfolioDetailRepository.deleteById(id);
        } else {
            throw new EntityNotFoundException("Portfolio detail not found with id: " + id);
        }
    }
}
