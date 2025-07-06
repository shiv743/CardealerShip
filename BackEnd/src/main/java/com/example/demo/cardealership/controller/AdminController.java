package com.example.demo.cardealership.controller;

import com.example.demo.cardealership.model.Inventory;
import com.example.demo.cardealership.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private InventoryService inventoryService;

    @GetMapping("/inventory")
    public ResponseEntity<List<Inventory>> getAllCars() {
        List<Inventory> cars = inventoryService.getAllInventory();
        return ResponseEntity.ok(cars);
    }

    @PostMapping("/inventory")
    public ResponseEntity<?> addCar(@RequestBody Inventory car) {
        Inventory addedCar = inventoryService.addInventory(car);
        return ResponseEntity.ok(addedCar);
    }

    @PutMapping("/inventory/{id}")
    public ResponseEntity<?> updateCar(@PathVariable Long id, @RequestBody Inventory car) {
        Optional<Inventory> existingCar = inventoryService.getInventoryById(id);
        if (existingCar.isPresent()) {
            car.setId(id);
            Inventory updatedCar = inventoryService.addInventory(car);
            return ResponseEntity.ok(updatedCar);
        } else {
            return ResponseEntity.status(404).body("Car not found with ID: " + id);
        }
    }

    @DeleteMapping("/inventory/{id}")
    public ResponseEntity<?> deleteCar(@PathVariable Long id) {
        if (inventoryService.existsById(id)) {
            inventoryService.deleteInventory(id);
            return ResponseEntity.ok("Car deleted successfully!");
        } else {
            return ResponseEntity.status(404).body("Car not found with ID: " + id);
        }
    }
}
