package com.wealthiq.stockportfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wealthiq.stockportfolio.model.Asset;

@Repository
public interface AssetRepository extends JpaRepository<Asset, Long> {
}
