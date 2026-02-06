package com.jsndz.spendly.service;

import com.jsndz.spendly.dto.ExpenseRequest;
import com.jsndz.spendly.model.Expense;
import com.jsndz.spendly.model.User;
import com.jsndz.spendly.repository.ExpenseRepository;
import com.jsndz.spendly.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Service
public class ExpenseService {

    private final ExpenseRepository expenseRepository;
    private final UserRepository userRepository;

    public ExpenseService(ExpenseRepository expenseRepository, UserRepository userRepository) {
        this.expenseRepository = expenseRepository;
        this.userRepository = userRepository;
    }

    @Transactional
    public Expense create(ExpenseRequest request) {
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found with id: " + request.getUserId()));
        Expense expense = new Expense(
                request.getAmount(),
                request.getDescription(),
                request.getCategory(),
                request.getExpenseDate(),
                user
        );
        return expenseRepository.save(expense);
    }

    public Expense getById(Long id) {
        return expenseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Expense not found with id: " + id));
    }

    public List<Expense> getAllByUserId(Long userId) {
        return expenseRepository.findByUser_IdOrderByExpenseDateDesc(userId);
    }

    public List<Expense> getByUserIdAndCategory(Long userId, String category) {
        return expenseRepository.findByUser_IdAndCategory(userId, category);
    }

    public List<Expense> getByUserIdAndDateRange(Long userId, LocalDate start, LocalDate end) {
        return expenseRepository.findByUser_IdAndExpenseDateBetween(userId, start, end);
    }

    @Transactional
    public Expense update(Long id, ExpenseRequest request) {
        Expense expense = getById(id);
        expense.setAmount(request.getAmount());
        expense.setDescription(request.getDescription());
        expense.setCategory(request.getCategory());
        expense.setExpenseDate(request.getExpenseDate());
        if (!expense.getUser().GetId().equals(request.getUserId())) {
            User user = userRepository.findById(request.getUserId())
                    .orElseThrow(() -> new RuntimeException("User not found with id: " + request.getUserId()));
            expense.setUser(user);
        }
        return expenseRepository.save(expense);
    }

    @Transactional
    public void delete(Long id) {
        if (!expenseRepository.existsById(id)) {
            throw new RuntimeException("Expense not found with id: " + id);
        }
        expenseRepository.deleteById(id);
    }
}
