package com.wealthiq.stockportfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wealthiq.stockportfolio.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
}
