package com.wealthiq.stockportfolio.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wealthiq.stockportfolio.model.Asset;
import com.wealthiq.stockportfolio.repository.AssetRepository;

@Service
public class AssetService {

    @Autowired
    private AssetRepository stockRepository;

    public Asset getStockById(Long id) {
        return stockRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Stock not found"));
    }

    public Asset saveStock(Asset stock) {
        return stockRepository.save(stock);
    }

    public void deleteStock(Long id) {
        stockRepository.deleteById(id);
    }

    public List<Asset> getAllStocks() {
        return stockRepository.findAll();
    }
}
