package com.backendwealthiq.services;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.backendwealthiq.models.ApplicationUser;
import com.backendwealthiq.models.LoginResponseDTO;
import com.backendwealthiq.models.Role;
import com.backendwealthiq.repository.RoleRepository;
import com.backendwealthiq.repository.UserRepository;

@Service
@Transactional
public class AuthenticationService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    public ApplicationUser registerUser(String username, String password) {

        String encodedPassword = passwordEncoder.encode(password);
        Role userRole = roleRepository.findByAuthority("USER").get();

        Set<Role> authorities = new HashSet<>();

        authorities.add(userRole);

        return userRepository.save(new ApplicationUser(0, username, encodedPassword, authorities));
    }

    public LoginResponseDTO loginUser(String username, String password) {

        try {
            Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username, password));

            String token = tokenService.generateJwt(auth);

            return new LoginResponseDTO(userRepository.findByUsername(username).get(), token);

        } catch (AuthenticationException e) {
            return new LoginResponseDTO(null, "");
        }
    }

    public boolean validateToken(String token) {
        try {
            // Use tokenService to validate the JWT token
            return tokenService.validateJwt(token);
        } catch (Exception e) {
            // Log any exceptions that occur during token validation
            e.printStackTrace();
            return false;
        }
    }

    public void logout(String username) {
        // Implement logout logic here, such as invalidating the token
        // For simplicity, let's assume clearing the token from the client-side
        // In a real-world scenario, you may also want to revoke the token on the
        // server-side
        // For example, you could maintain a list of invalidated tokens in a database

        // Here, you could send a response to the client instructing it to clear the
        // token
        // Or you could set an expiration time for the token so it becomes invalid after
        // a certain period

        // For demonstration purposes, let's just print a message indicating the user
        // has been logged out
        System.out.println("User " + username + " has been logged out.");
    }

}
