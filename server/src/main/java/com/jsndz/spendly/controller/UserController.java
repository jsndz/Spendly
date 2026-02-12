package com.jsndz.spendly.controller;

import com.jsndz.spendly.dto.AuthResponse;
import com.jsndz.spendly.dto.LoginRequest;
import com.jsndz.spendly.dto.SignupRequest;
import com.jsndz.spendly.model.User;
import com.jsndz.spendly.service.AuthService;
import com.jsndz.spendly.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final AuthService authService;

    public UserController(UserService us, AuthService authService){
        this.authService = authService;
    }
    @GetMapping("/ping")
    public String Ping(){
        return "hello";
    }

    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> signup(
            @Valid @RequestBody SignupRequest req
            ){
        AuthResponse res = authService.signup(req.getEmail(),req.getPassword(),req.getName());
        return ResponseEntity.ok(res);

    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(
            @Valid @RequestBody LoginRequest request
    ) {
        AuthResponse response =
                authService.login(request.getEmail(), request.getPassword());

        return ResponseEntity.ok(response);
    }
}
