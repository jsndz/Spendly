package com.jsndz.spendly.model;

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
    public String Name;

    @Column(nullable = false,unique = true)
    @Email
    public String Email;

    public User() {}

    public User(String name ,String email  ){
        this.Name = name;
        this.Email = email;
    }

    //getter and setter

    public String  GetName(){
        return this.Name;
    }
    public void   SetName(String name ){
         this.Name=name;
    }
    public String  GetEmail(){
        return this.Email;
    }
    public void   SetEmail(String email ){
        this.Email=email;
    }
    public Long  GetId(){
        return this.id;
    }


}
