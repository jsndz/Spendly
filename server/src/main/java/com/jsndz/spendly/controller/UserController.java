package com.jsndz.spendly.controller;

import com.jsndz.spendly.model.User;
import com.jsndz.spendly.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService us){
        this.userService = us;
    }
    @GetMapping("/ping")
    public String Ping(){
        return "hello";
    }
    @PostMapping("/signup")
    public User SignUp(@RequestBody User user){
        System.out.println("Signup Hit");
        return userService.CreateUser(user.Name,user.Email);
    }


    @GetMapping("/login/{id}")
    public User Login(@PathVariable Long id){
        return userService.GetUser(id);
    }
}
