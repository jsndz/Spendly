package com.jsndz.spendly.service;

import com.jsndz.spendly.model.User;
import com.jsndz.spendly.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    public final UserRepository userRepo;

    public UserService(UserRepository userRepo ){
        this.userRepo = userRepo;
    }

    public User CreateUser(String name ,String email ){
       return  this.userRepo.save(new User(name,email));
    }
    public User GetUser(Long id ){
        return  this.userRepo.findById(id)
                .orElseThrow(()->new RuntimeException("User not found"));
    }
    public List<User> GetAll(){
        return this.userRepo.findAll();
    }
}
