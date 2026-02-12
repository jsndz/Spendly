package com.jsndz.spendly.service;

import com.jsndz.spendly.dto.AuthResponse;
import com.jsndz.spendly.dto.UserResponse;
import com.jsndz.spendly.model.User;
import com.jsndz.spendly.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class AuthService {

    private final UserRepository userRepo;
    private final PasswordEncoder passwordEncoder;

    public AuthService(
            UserRepository userRepo,
            PasswordEncoder passwordEncoder) {
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
    }

    public AuthResponse login(String email, String password) {

        User user = userRepo.findByEmail(email)
                .orElseThrow();

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        UserResponse userDTO =
                new UserResponse(user.getId(), user.getName(), user.getEmail());

        return new AuthResponse(userDTO);
    }


    public AuthResponse signup(String email, String password,String name){

        if (userRepo.findByEmail(email).isPresent()) {
            throw new RuntimeException("Email already registered");
        }
        User user = new User();
        user.setEmail(email);
        user.setName(name);
        user.setPassword(passwordEncoder.encode(password));

        user = userRepo.save(user);

        UserResponse userDTO =
                new UserResponse(user.getId(), user.getName(), user.getEmail());

        return new AuthResponse(userDTO);

    }


}