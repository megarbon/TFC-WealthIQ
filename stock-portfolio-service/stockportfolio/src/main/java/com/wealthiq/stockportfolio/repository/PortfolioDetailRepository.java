package com.wealthiq.stockportfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wealthiq.stockportfolio.model.PortfolioDetail;

@Repository
public interface PortfolioDetailRepository extends JpaRepository<PortfolioDetail, Long> {

}
