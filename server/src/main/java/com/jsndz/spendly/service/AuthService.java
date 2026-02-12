package com.jsndz.spendly.service;

import com.jsndz.spendly.dto.AuthResponse;
import com.jsndz.spendly.dto.UserResponse;
import com.jsndz.spendly.model.User;
import com.jsndz.spendly.repository.UserRepository;
import com.jsndz.spendly.security.JwtService;
import com.jsndz.spendly.security.UserPrincipal;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.lang.ScopedValue;

@Service
public class AuthService {

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final UserRepository userRepo;
    private final PasswordEncoder passwordEncoder;

    public AuthService(
            AuthenticationManager authenticationManager,
            JwtService jwtService,
            UserRepository userRepo,
            PasswordEncoder passwordEncoder) {
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
    }

    public AuthResponse login(String email, String password) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(email, password)
        );

        User user = userRepo.findByEmail(email).orElseThrow();

        UserPrincipal principal = new UserPrincipal(user);

        String accessToken = jwtService.generateAccessToken(principal);
        String refreshToken = jwtService.generateRefreshToken(user);

        UserResponse userDTO =
                new UserResponse(user.getId(), user.getName(), user.getEmail());

        return new AuthResponse(accessToken, refreshToken, userDTO);
    }


    public AuthResponse signup(String email, String password,String name){
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(email, password)
        );
        if (userRepo.findByEmail(email).isPresent()) {
            throw new RuntimeException("Email already registered");
        }
        User user = new User();
        user.setEmail(email);
        user.setName(name);
        user.setPassword(passwordEncoder.encode(password));

        user = userRepo.save(user);


        UserPrincipal principal = new UserPrincipal(user);

        String accessToken = jwtService.generateAccessToken(principal);
        String refreshToken = jwtService.generateRefreshToken(user);

        UserResponse userDTO =
                new UserResponse(user.getId(), user.getName(), user.getEmail());

        return new AuthResponse(accessToken, refreshToken, userDTO);

    }


}