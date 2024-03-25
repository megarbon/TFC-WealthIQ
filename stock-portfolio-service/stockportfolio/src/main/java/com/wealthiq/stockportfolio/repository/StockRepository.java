package com.wealthiq.stockportfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wealthiq.stockportfolio.model.Stock;

@Repository
public interface StockRepository extends JpaRepository<Stock, Long> {
}
