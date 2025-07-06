package com.example.demo.cardealership.service;

import com.example.demo.cardealership.model.Vehicle;
import com.example.demo.cardealership.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class VehicleService {

    @Autowired
    private VehicleRepository vehicleRepository;

    // Fetch all vehicles
    public List<Vehicle> findAllVehicles() {
        return vehicleRepository.findAll();
    }

    // Fetch a vehicle by ID
    public Optional<Vehicle> findVehicleById(Long id) {
        return vehicleRepository.findById(id);
    }

    // Save or update a vehicle
    public Vehicle saveVehicle(Vehicle vehicle) {
        return vehicleRepository.save(vehicle);
    }

    // Delete a vehicle by ID
    public void deleteVehicle(Long id) {
        vehicleRepository.deleteById(id);
    }

    public List<String> getDistinctMakes() {
        return vehicleRepository.findAll()
                .stream()
                .map(Vehicle::getMake)
                .distinct()
                .collect(Collectors.toList());
    }

    public List<String> getDistinctModels() {
        return vehicleRepository.findAll()
                .stream()
                .map(Vehicle::getModel)
                .distinct()
                .collect(Collectors.toList());
    }

    public List<Integer> getDistinctYears() {
        return vehicleRepository.findAll()
                .stream()
                .map(Vehicle::getYear)
                .distinct()
                .collect(Collectors.toList());
    }

    public List<String> getDistinctTransmissions() {
        return vehicleRepository.findAll()
                .stream()
                .map(Vehicle::getTransmission)
                .distinct()
                .collect(Collectors.toList());
    }

    public List<String> getDistinctBodyStyles() {
        return vehicleRepository.findAll()
                .stream()
                .map(Vehicle::getBodyStyle)
                .distinct()
                .collect(Collectors.toList());
    }

    public List<String> getDistinctColors() {
        return vehicleRepository.findAll()
                .stream()
                .map(Vehicle::getColor)
                .distinct()
                .collect(Collectors.toList());
    }

    public List<String> getDistinctEngines() {
        return vehicleRepository.findAll()
                .stream()
                .map(Vehicle::getEngine)
                .distinct()
                .collect(Collectors.toList());
    }

    public List<String> getDistinctFuelTypes() {
        return vehicleRepository.findAll()
                .stream()
                .map(Vehicle::getFuelType)
                .distinct()
                .collect(Collectors.toList());
    }

    // Search vehicles with filters
    public List<Vehicle> searchVehicles(
            String make,
            String model,
            Integer minYear,
            Integer maxYear,
            Double minPrice,
            Double maxPrice,
            String transmission,
            String bodyStyle,
            String color,
            String engine,
            String fuelType
    ) {
        // Handle null filters with default values or conditions
        minYear = (minYear == null) ? 0 : minYear;
        maxYear = (maxYear == null) ? Integer.MAX_VALUE : maxYear;
        minPrice = (minPrice == null) ? 0.0 : minPrice;
        maxPrice = (maxPrice == null) ? Double.MAX_VALUE : maxPrice;

        // Call a custom repository method to dynamically filter results
        return vehicleRepository.findVehiclesByFilters(
                make,
                model,
                minYear,
                maxYear,
                minPrice,
                maxPrice,
                transmission,
                bodyStyle,
                color,
                engine,
                fuelType
        );
    }

}
