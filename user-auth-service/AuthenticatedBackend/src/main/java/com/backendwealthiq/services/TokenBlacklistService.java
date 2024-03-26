package com.backendwealthiq.services;
import org.springframework.stereotype.Component;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class TokenBlacklistService {

    // Usamos un ConcurrentHashMap para almacenar los tokens en la lista negra
    private final Set<String> blacklist = ConcurrentHashMap.newKeySet();

    // Método para añadir un token a la lista negra
    public void addToBlacklist(String token) {
        blacklist.add(token);
    }

    // Método para verificar si un token está en la lista negra
    public boolean isTokenBlacklisted(String token) {
        return blacklist.contains(token);
    }

    // Método para eliminar un token de la lista negra
    public void removeFromBlacklist(String token) {
        blacklist.remove(token);
    }
}
