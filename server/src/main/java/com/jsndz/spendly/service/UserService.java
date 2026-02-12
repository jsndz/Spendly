package com.jsndz.spendly.service;

import com.jsndz.spendly.model.User;
import com.jsndz.spendly.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    public final UserRepository userRepo;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepo, PasswordEncoder passwordEncoder){
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
    }

    public User createUser(String name ,String email , String Password){
        User user= new User();
        user.setEmail(email);
        user.setName(name);
        user.setPassword(passwordEncoder.encode(Password));
       return  this.userRepo.save(user);
    }
    public User getUser(String email, String password){
        User user = userRepo.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));;

        if (!passwordEncoder.matches(password, user.getPassword())) {
            return null;
        }
        return user;

    }
    public List<User> GetAll(){
        return this.userRepo.findAll();
    }
}
