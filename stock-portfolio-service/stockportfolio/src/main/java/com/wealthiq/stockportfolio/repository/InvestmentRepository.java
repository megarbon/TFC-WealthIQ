package com.wealthiq.stockportfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wealthiq.stockportfolio.model.Investment;

@Repository
public interface InvestmentRepository extends JpaRepository<Investment, Long> {

}
