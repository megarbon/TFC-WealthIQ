package com.backendwealthiq.services.portfolio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backendwealthiq.models.portfolio.Asset;
import com.backendwealthiq.repository.portfolio.AssetRepository;

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
