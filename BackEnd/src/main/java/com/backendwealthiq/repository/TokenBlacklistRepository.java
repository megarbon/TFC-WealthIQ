package com.backendwealthiq.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backendwealthiq.models.TokenBlacklist;

public interface TokenBlacklistRepository extends JpaRepository<TokenBlacklist, String> {
}
