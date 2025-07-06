package com.example.demo.cardealership.repository;

import com.example.demo.cardealership.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {

    // Custom query for filtering vehicles
    @Query("SELECT v FROM Vehicle v " +
            "WHERE (:make IS NULL OR v.make = :make) " +
            "AND (:model IS NULL OR v.model = :model) " +
            "AND (:minYear IS NULL OR v.year >= :minYear) " +
            "AND (:maxYear IS NULL OR v.year <= :maxYear) " +
            "AND (:minPrice IS NULL OR v.price >= :minPrice) " +
            "AND (:maxPrice IS NULL OR v.price <= :maxPrice) " +
            "AND (:transmission IS NULL OR v.transmission = :transmission) " +
            "AND (:bodyStyle IS NULL OR v.bodyStyle = :bodyStyle) " +
            "AND (:color IS NULL OR v.color = :color) " +
            "AND (:engine IS NULL OR v.engine = :engine) " +
            "AND (:fuelType IS NULL OR v.fuelType = :fuelType)")
    List<Vehicle> findVehiclesByFilters(
            @Param("make") String make,
            @Param("model") String model,
            @Param("minYear") Integer minYear,
            @Param("maxYear") Integer maxYear,
            @Param("minPrice") Double minPrice,
            @Param("maxPrice") Double maxPrice,
            @Param("transmission") String transmission,
            @Param("bodyStyle") String bodyStyle,
            @Param("color") String color,
            @Param("engine") String engine,
            @Param("fuelType") String fuelType
    );
}
