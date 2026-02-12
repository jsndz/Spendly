package com.jsndz.spendly.controller;

import com.jsndz.spendly.dto.ExpenseRequest;
import com.jsndz.spendly.model.Expense;
import com.jsndz.spendly.service.ExpenseService;
import jakarta.validation.Valid;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {

    private final ExpenseService expenseService;

    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @PostMapping("/create")
    public ResponseEntity<Expense> Create(@Valid @RequestBody ExpenseRequest request){
       Expense ex = expenseService.create(request);
       return ResponseEntity.status(200).body(ex);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Expense> getById(@PathVariable Long id) {
        return ResponseEntity.ok(expenseService.getById(id));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Expense>> getAllByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(expenseService.getAllByUserId(userId));
    }

    @GetMapping("/user/{userId}/category")
    public ResponseEntity<List<Expense>> getByCategory(
            @PathVariable Long userId,
            @RequestParam String category) {
        return ResponseEntity.ok(expenseService.getByUserIdAndCategory(userId, category));
    }

    @GetMapping("/user/{userId}/range")
    public ResponseEntity<List<Expense>> getByDateRange(
            @PathVariable Long userId,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate start,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate end) {
        return ResponseEntity.ok(expenseService.getByUserIdAndDateRange(userId, start, end));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Expense> update(@PathVariable Long id, @Valid @RequestBody ExpenseRequest request) {
        return ResponseEntity.ok(expenseService.update(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        expenseService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
