package com.example.PlipKart.Login.controller;

import com.example.PlipKart.Login.Entity.User;
import com.example.PlipKart.Login.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthController(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/login")
    public String login(
            @RequestParam String username,
            @RequestParam String email,
            @RequestParam String phoneNumber,
            @RequestParam String password) {

        Optional<User> userOpt = userRepository.findByUsername(username);

        if (userOpt.isPresent()) {
            User user = userOpt.get();

            // Check all fields
            if (user.getEmail().equals(email) &&
                    user.getPhoneNumber().equals(phoneNumber) &&
                    passwordEncoder.matches(password, user.getPassword())) {
                return "SUCCESS";
            }
        }

        return "INVALID";
    }
}
