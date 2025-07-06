package com.example.demo.cardealership.controller;

import com.example.demo.cardealership.model.User;
import com.example.demo.cardealership.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    /*
     * Registers a new user with a default role of "user" unless specified otherwise.
     */
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        try {
            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
            user.setPassword(encoder.encode(user.getPassword()));

            // Ensure the role is "user" if not explicitly provided
            if (user.getRole() == null || user.getRole().isEmpty()) {
                user.setRole("user");
            }

            User registeredUser = userService.registerUser(user);

            // Build response with non-sensitive user details
            Map<String, Object> response = new HashMap<>();
            response.put("id", registeredUser.getId());
            response.put("username", registeredUser.getUsername());
            response.put("email", registeredUser.getEmail());
            response.put("role", registeredUser.getRole());

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    /**
     * Authenticates a user and determines their role for access control.
     */
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        String username = credentials.get("username");
        String password = credentials.get("password");

        if (username == null || password == null) {
            return ResponseEntity.badRequest().body(Map.of("error", "Username or password is missing"));
        }

        // Check for hardcoded admin credentials
        if (username.equals("admin") && password.equals("admin123")) {
            return ResponseEntity.ok(Map.of(
                    "role", "admin",
                    "message", "Login successful as admin"
            ));
        }

        // Handle regular user login
        return userService.findByUsername(username)
                .map(user -> {
                    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
                    if (encoder.matches(password, user.getPassword())) {
                        return ResponseEntity.ok(Map.of(
                                "role", user.getRole(), // Use the role from the database
                                "message", "Login successful"
                        ));
                    } else {
                        return ResponseEntity.status(401).body(Map.of("error", "Invalid credentials"));
                    }
                })
                .orElse(ResponseEntity.status(401).body(Map.of("error", "User not found")));
    }
}
