package com.example.demo.cardealership.controller;

import com.example.demo.cardealership.model.Appointment;
import com.example.demo.cardealership.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @GetMapping
    public ResponseEntity<List<Appointment>> getAllAppointments() {
        List<Appointment> appointments = appointmentService.getAllAppointments();
        return ResponseEntity.ok(appointments);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Appointment> getAppointmentById(@PathVariable Long id) {
        Optional<Appointment> appointment = appointmentService.getAppointmentById(id);
        if (appointment.isPresent()) {
            return ResponseEntity.ok(appointment.get());
        } else {
            return ResponseEntity.notFound().build(); // Use a 404 response without a body
        }
    }


    @PostMapping // Define POST mapping for booking an appointment
    public ResponseEntity<Appointment> bookAppointment(@RequestBody Appointment appointment) {
        if (appointment.getCustomerName() == null ||
                appointment.getContact() == null ||
                appointment.getVehicle() == null ||
                appointment.getAppointmentDate() == null ||
                appointment.getServiceType() == null) {
            return ResponseEntity.badRequest().build();
        }

        Appointment savedAppointment = appointmentService.bookAppointment(appointment);
        return ResponseEntity.ok(savedAppointment);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAppointment(@PathVariable Long id) {
        Optional<Appointment> appointment = appointmentService.getAppointmentById(id);
        if (appointment.isPresent()) {
            appointmentService.deleteAppointment(id);
            return ResponseEntity.ok("Appointment deleted successfully!");
        } else {
            return ResponseEntity.status(404).body("Appointment not found with ID: " + id);
        }
    }
}
