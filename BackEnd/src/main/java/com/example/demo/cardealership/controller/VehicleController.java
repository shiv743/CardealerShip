package com.example.demo.cardealership.controller;

import com.example.demo.cardealership.model.Vehicle;
import com.example.demo.cardealership.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/vehicles")
public class VehicleController {

    @Autowired
    private VehicleService vehicleService;

    // Get all vehicles (filtered view for users)
    @GetMapping
    public List<Vehicle> getAllVehicles() {
        return vehicleService.findAllVehicles();
    }

    @PostMapping("/search")
    public List<Vehicle> searchVehicles(@RequestBody Map<String, Object> filters) {
        String make = (String) filters.get("make");
        String model = (String) filters.get("model");
        Integer minYear = (Integer) filters.get("minYear");
        Integer maxYear = (Integer) filters.get("maxYear");
        Double minPrice = (Double) filters.get("minPrice");
        Double maxPrice = (Double) filters.get("maxPrice");
        String transmission = (String) filters.get("transmission");
        String bodyStyle = (String) filters.get("bodyStyle");
        String color = (String) filters.get("color");
        String engine = (String) filters.get("engine");
        String fuelType = (String) filters.get("fuelType");

        return vehicleService.searchVehicles(make, model, minYear, maxYear, minPrice, maxPrice, transmission, bodyStyle, color, engine, fuelType);
    }


    @GetMapping("/filters")
    public Map<String, List<?>> getFilterOptions() {
        Map<String, List<?>> filters = new HashMap<>();
        filters.put("makes", vehicleService.getDistinctMakes());
        filters.put("models", vehicleService.getDistinctModels());
        filters.put("years", vehicleService.getDistinctYears());
        filters.put("transmissions", vehicleService.getDistinctTransmissions());
        filters.put("bodyStyles", vehicleService.getDistinctBodyStyles());
        filters.put("colors", vehicleService.getDistinctColors());
        filters.put("engines", vehicleService.getDistinctEngines());
        filters.put("fuelTypes", vehicleService.getDistinctFuelTypes());
        return filters;
    }


    // Search vehicles with optional filters
    @GetMapping("/search")
    public List<Vehicle> searchVehicles(
            @RequestParam(required = false) String make,
            @RequestParam(required = false) String model,
            @RequestParam(required = false) Integer minYear,
            @RequestParam(required = false) Integer maxYear,
            @RequestParam(required = false) Double minPrice,
            @RequestParam(required = false) Double maxPrice,
            @RequestParam(required = false) String transmission,
            @RequestParam(required = false) String bodyStyle,
            @RequestParam(required = false) String color,
            @RequestParam(required = false) String engine,
            @RequestParam(required = false) String fuelType
    ) {
        return vehicleService.searchVehicles(make, model, minYear, maxYear, minPrice, maxPrice, transmission, bodyStyle, color, engine, fuelType);
    }

}
