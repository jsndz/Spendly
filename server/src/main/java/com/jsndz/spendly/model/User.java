package com.jsndz.spendly.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import org.springframework.context.annotation.Primary;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    public Long id;

    @Column(nullable = false)
    public String name;

    @Column(nullable = false,unique = true)
    @Email
    public String email;

    @JsonIgnore
    @Column(nullable = false)
    public String password;


    public User() {}

    public User(String name ,String email  ){
        this.name = name;
        this.email = email;
    }

    //getter and setter

    public String  getName(){
        return this.name;
    }
    public void   setName(String name ){
         this.name=name;
    }
    public String  getEmail(){
        return this.email;
    }
    public void   setEmail(String email ){
        this.email=email;
    }
    public Long  getId(){
        return this.id;
    }
    public String getPassword(){
        return this.password;
    }
    public void setPassword(String password ){
        this.password=password;
    }


}
