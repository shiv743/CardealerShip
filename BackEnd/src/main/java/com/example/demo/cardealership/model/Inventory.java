package com.example.demo.cardealership.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "vehicle") // Table name in the database
public class Inventory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // Unique identifier for inventory item

    private String make; // Make of the car (e.g., Toyota, Ford)
    private String model;
    private Integer year; // Year of manufacture
    private String bodyStyle; // Body style (e.g., Sedan, SUV)
    private Integer odometer; // Mileage in kilometers or miles
    private String odometerUnit; // Unit for odometer (e.g., km, miles)
    private String transmission; // Transmission type (e.g., Automatic, Manual)
    private String engine; // Engine details (e.g., 2.5L 4-Cylinder)
    private String fuelType; // Fuel type (e.g., Gasoline, Diesel)
    private String color; // Exterior color
    private Integer passengers; // Number of passengers
    private String description; // Description of the car
    private String image; // URL to the car image
    private Double price; // Price of the car

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public String getBodyStyle() {
        return bodyStyle;
    }

    public void setBodyStyle(String bodyStyle) {
        this.bodyStyle = bodyStyle;
    }

    public Integer getOdometer() {
        return odometer;
    }

    public void setOdometer(Integer odometer) {
        this.odometer = odometer;
    }

    public String getOdometerUnit() {
        return odometerUnit;
    }

    public void setOdometerUnit(String odometerUnit) {
        this.odometerUnit = odometerUnit;
    }

    public String getTransmission() {
        return transmission;
    }

    public void setTransmission(String transmission) {
        this.transmission = transmission;
    }

    public String getEngine() {
        return engine;
    }

    public void setEngine(String engine) {
        this.engine = engine;
    }

    public String getFuelType() {
        return fuelType;
    }

    public void setFuelType(String fuelType) {
        this.fuelType = fuelType;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Integer getPassengers() {
        return passengers;
    }

    public void setPassengers(Integer passengers) {
        this.passengers = passengers;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

}
