package com.wealthiq.stockportfolio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.wealthiq.stockportfolio.model.Portfolio;
import com.wealthiq.stockportfolio.model.User;
import com.wealthiq.stockportfolio.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/{id}")
    public User getUser(@PathVariable Integer id) {
        return userService.getUserById(id);
    }

    @GetMapping("/{id}/portfolio")
    public Portfolio getPortfolioByUserId(@PathVariable Integer id) {
        User user = userService.getUserById(id);
        return user.getPortfolio();
    }

    @PostMapping("/{id}/portfolio")
    public User addPortfolioToUser(@PathVariable Integer id, @RequestBody Portfolio portfolio) {
        User user = userService.getUserById(id);
        user.setPortfolio(portfolio);
        return userService.saveUser(user);
    }
}
