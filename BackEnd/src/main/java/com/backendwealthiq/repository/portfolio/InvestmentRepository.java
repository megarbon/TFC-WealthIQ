package com.backendwealthiq.repository.portfolio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backendwealthiq.models.portfolio.Investment;

@Repository
public interface InvestmentRepository extends JpaRepository<Investment, Long> {

}
