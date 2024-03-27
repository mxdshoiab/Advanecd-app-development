package com.matrix.matrix.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.matrix.matrix.dto.request.BookingRequest;
import com.matrix.matrix.model.Booking;
import com.matrix.matrix.service.impl.BookingServiceImpl;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;



@RestController
@RequestMapping("/api/booking")
@RequiredArgsConstructor
@Tag(name = "Booking", description = "Endpoints for Booking")
public class BookingController {
    private final BookingServiceImpl instituteServiceImpl;
    @PostMapping("/addbooking")
    public String postMethodName(@RequestBody BookingRequest instituteRequest) {
        
        return instituteServiceImpl.addInstitute(instituteRequest);
    }
    @GetMapping("/allbooking")
    public List<Booking> getMethodName() {
        return instituteServiceImpl.getAllInstitution();
    }
    @GetMapping("/booking/{id}")
    @Operation(summary = "Get a booking by ID", description = "Allows all users to get all booking.")
    public Booking getByinstituteId(@PathVariable Long id) { 
        return instituteServiceImpl.getInstituteByID(id);
    }
    @GetMapping("/booking/{name}")
    @Operation(summary = "Get a booking by ID", description = "Allows all users to get all booking.")
    public List<Booking>  getByinstituteName(@PathVariable String name) { 
        return instituteServiceImpl.getInstituteByName(name);
    }
    @PutMapping("editbooking/{id}")
    @Operation(summary = "Edit booking", description = "Allows admin users to update a booking.")
    public String updateinstitute(@PathVariable Long id, @RequestBody BookingRequest entity) { 
        return instituteServiceImpl.editInstitute(entity, id);
    }
    @DeleteMapping("/deletebooking/{id}")
    @Operation(summary = "Delete booking", description = "Allows admin users to delete a booking.")
    public String deleteinstitute(@PathVariable Long id, @RequestBody BookingRequest entity) {
        return instituteServiceImpl.deleteInsitute(id);
    }
    

    

}
