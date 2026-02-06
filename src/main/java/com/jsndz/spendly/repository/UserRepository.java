package com.jsndz.spendly.repository;

import com.jsndz.spendly.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

}
