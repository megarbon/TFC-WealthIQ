package com.backendwealthiq.services;

import com.backendwealthiq.models.ApplicationUser;
import com.backendwealthiq.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println("In the user details service");
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    public List<ApplicationUser> getAllUsers() {
        return userRepository.findAll();
    }

    public ApplicationUser getUserById(Long id) {
        Optional<ApplicationUser> optionalUser = userRepository.findById(id);
        return optionalUser.orElse(null);
    }

    public boolean existsById(Long id) {
        return userRepository.existsById(id);
    }

    public ApplicationUser updateUser(ApplicationUser user) {
        return userRepository.save(user);
    }

    public ApplicationUser createUser(ApplicationUser user) {
        // You may want to encode the password before saving the user
        user.setPassword(encoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public void deleteUserById(Long id) {
        userRepository.deleteById(id);
    }

    public ApplicationUser updateUser(Long id, ApplicationUser userDetails) {
        return userRepository.findById(id).map(user -> {
            user.setPassword(encoder.encode(userDetails.getPassword()));
            user.setUsername(userDetails.getUsername());
            user.setFirstName(userDetails.getFirstName());
            user.setSurname(userDetails.getSurname());
            user.setDescription(userDetails.getDescription());
            return userRepository.save(user);
        }).orElseThrow(() -> new RuntimeException("User not found"));
    }
}
