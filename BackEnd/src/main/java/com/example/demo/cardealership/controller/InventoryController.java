package com.example.demo.cardealership.controller;

import com.example.demo.cardealership.model.Vehicle;
import com.example.demo.cardealership.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/inventory")
public class InventoryController {

    @Autowired
    private VehicleService vehicleService;

    // Get all inventory items
    @GetMapping
    public ResponseEntity<List<Vehicle>> getAllInventory() {
        List<Vehicle> inventoryList = vehicleService.findAllVehicles();
        if (inventoryList.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(inventoryList);
    }

    // Get inventory item by ID
    @GetMapping("/{id}")
    public ResponseEntity<Vehicle> getInventoryById(@PathVariable Long id) {
        Optional<Vehicle> vehicle = vehicleService.findVehicleById(id);
        return vehicle.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Add a new inventory item
    @PostMapping
    public ResponseEntity<Vehicle> addInventory(@RequestBody Vehicle vehicle) {
        try {
            // Ensure stockNumber and image are provided for admin
            if (vehicle.getStockNumber() == null || vehicle.getStockNumber().isEmpty()) {
                return ResponseEntity.badRequest().body(null);
            }

            Vehicle savedVehicle = vehicleService.saveVehicle(vehicle);
            return ResponseEntity.ok(savedVehicle);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    // Update an inventory item
    @PutMapping("/{id}")
    public ResponseEntity<Vehicle> updateInventory(@PathVariable Long id, @RequestBody Vehicle vehicle) {
        Optional<Vehicle> existingVehicle = vehicleService.findVehicleById(id);

        if (existingVehicle.isPresent()) {
            vehicle.setId(id); // Ensure the ID matches the one being updated
            Vehicle updatedVehicle = vehicleService.saveVehicle(vehicle);
            return ResponseEntity.ok(updatedVehicle);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete an inventory item
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteInventory(@PathVariable Long id) {
        Optional<Vehicle> existingVehicle = vehicleService.findVehicleById(id);

        if (existingVehicle.isPresent()) {
            vehicleService.deleteVehicle(id);
            return ResponseEntity.ok("Vehicle with ID " + id + " deleted successfully.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
