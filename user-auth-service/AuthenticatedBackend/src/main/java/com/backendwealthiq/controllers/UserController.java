package com.backendwealthiq.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

    @GetMapping("/")
    public String helloUserController() {
        return "User access level";
    }

    @GetMapping("/secret")
    public String privateEndpoint() {
        // Redirect to a static HTML page
        return "redirect:http://localhost:3000/";
    }

}
