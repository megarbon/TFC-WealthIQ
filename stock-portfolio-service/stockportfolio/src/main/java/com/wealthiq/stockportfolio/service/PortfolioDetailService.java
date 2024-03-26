package com.wealthiq.stockportfolio.service;

import org.springframework.stereotype.Service;
import java.util.List;
import java.util.NoSuchElementException;
import com.wealthiq.stockportfolio.model.PortfolioDetail;
import com.wealthiq.stockportfolio.repository.PortfolioDetailRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class PortfolioDetailService {
    private final PortfolioDetailRepository portfolioDetailRepository;

    public PortfolioDetailService(PortfolioDetailRepository portfolioDetailRepository) {
        this.portfolioDetailRepository = portfolioDetailRepository;
    }

    public List<PortfolioDetail> getAllPortfolioDetails() {
        return portfolioDetailRepository.findAll();
    }

    public PortfolioDetail getPortfolioDetailById(Long id) {
        return portfolioDetailRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Portfolio detail not found with id: " + id));
    }

    public PortfolioDetail createPortfolioDetail(PortfolioDetail portfolioDetail) {
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
