package com.backendwealthiq.controllers.portfolio;

import com.backendwealthiq.models.ApplicationUser;
import com.backendwealthiq.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/")
    public String helloUserController() {
        return "User access level";
    }

    @GetMapping("/secret")
    public String privateEndpoint() {
        // Redirect to a static HTML page
        return "redirect:http://localhost:3000/";
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<ApplicationUser>> getAllUsers() {
        try {
            List<ApplicationUser> users = userService.getAllUsers();
            return new ResponseEntity<>(users, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApplicationUser> getUserById(@PathVariable("id") Long id) {
        ApplicationUser user = userService.getUserById(id);
        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> createUser(@RequestBody ApplicationUser user) {
        try {
            ApplicationUser createdUser = userService.createUser(user);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") Long id) {
        try {
            userService.deleteUserById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<ApplicationUser> updateUser(@PathVariable Long id, @RequestBody ApplicationUser userDetails) {
        ApplicationUser updatedUser = userService.updateUser(id, userDetails);
        return ResponseEntity.ok(updatedUser);
    }
}
