package com.example.PlipKart.Login;

import com.example.PlipKart.Login.Entity.User;
import com.example.PlipKart.Login.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner initDatabase(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            // only add if empty
            if (userRepository.count() == 0) {
                User user1 = new User();
                user1.setUsername("aadhithyavarman");
                user1.setEmail("aadhithyavarmansist@gmail.com");
                user1.setPhoneNumber("9500936522");
                user1.setPassword(passwordEncoder.encode("aadhithya@ck"));

                User user2 = new User();
                user2.setUsername("praveen");
                user2.setEmail("praveen@gmail.com");
                user2.setPhoneNumber("8939226171");
                user2.setPassword(passwordEncoder.encode("praveen@123"));

                userRepository.save(user1);
                userRepository.save(user2);
            }
        };
    }
}
