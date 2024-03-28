package com.backendwealthiq.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backendwealthiq.models.ApplicationUser;
import com.backendwealthiq.models.AuthenticationRequestDTO;
import com.backendwealthiq.models.LoginResponseDTO;
import com.backendwealthiq.models.LogoutRequestDTO;
import com.backendwealthiq.models.RegistrationDTO;
import com.backendwealthiq.models.TokenBlacklist;
import com.backendwealthiq.repository.TokenBlacklistRepository;
import com.backendwealthiq.services.AuthenticationService;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/register")
    public ApplicationUser registerUser(@RequestBody RegistrationDTO body) {
        return authenticationService.registerUser(body.getUsername(), body.getPassword());
    }

    @PostMapping("/login")
    public LoginResponseDTO loginUser(@RequestBody RegistrationDTO body) {
        return authenticationService.loginUser(body.getUsername(), body.getPassword());
    }

    @PostMapping("/validate-token")
    public ResponseEntity<Void> validateToken(@RequestBody AuthenticationRequestDTO authenticationRequest) {
        boolean isValidToken = authenticationService.validateToken(authenticationRequest.getToken());
        if (isValidToken) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @Autowired
    private TokenBlacklistRepository tokenBlacklistRepository;

    /*
     * Endpoint de logout que añade los token expirados a una lista negra en la bd
     */
    @PostMapping("/logout")
    public void logout(@RequestBody LogoutRequestDTO logoutRequest) {
        // Agregar el token a la lista negra en la base de datos
        TokenBlacklist tokenBlacklist = new TokenBlacklist();
        tokenBlacklist.setToken(logoutRequest.getToken());
        tokenBlacklistRepository.save(tokenBlacklist);
    }

}
