package com.matrix.matrix.controller;

import java.util.List;

import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.matrix.matrix.dto.request.MyServicesRequest;
import com.matrix.matrix.model.MyServices;
import com.matrix.matrix.service.impl.MyServicesServiceImpl;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;





@RestController
@RequestMapping("/api/MyServices")
@RequiredArgsConstructor
@Tag(name = "MyServices", description = "Endpoints for MyServices")
public class MyServicesController {

    private final MyServicesServiceImpl courseService;
    @ApiRoleAccessNotes
    @Secured("Admin")
    @PostMapping("/addMyServices")
    @Operation(summary = "Register a new service", description = "Allows Admin to create a service.")
    public String postMethodName(@RequestBody MyServicesRequest courseRequest) {
        return courseService.addCourse(courseRequest);
    }
    @GetMapping("/allservices")
    @Operation(summary = "Get all services", description = "Allows all users to get all services.")
    public List<MyServices> getAllCourses() {
        return courseService.getAllCourses();
    }
    
    @GetMapping("/services/{id}")
    @Operation(summary = "Get a service by ID", description = "Allows all users to get all services.")
    public MyServices getByCourseId(@PathVariable Long id) { 
        return courseService.getCourseByID(id);
    }
    @GetMapping("/services/{name}")
    @Operation(summary = "Get a service by ID", description = "Allows all users to get all services.")
    public List<MyServices>  getByCourseName(@PathVariable String name) { 
        return courseService.getCourseByName(name);
    }
    @PutMapping("editservices/{id}")
    @Operation(summary = "Edit service", description = "Allows admin users to update a service.")
    public String updateCourse(@PathVariable Long id, @RequestBody MyServicesRequest entity) { 
        return courseService.editCourse(entity, id);
    }
    @DeleteMapping("/deleteservices/{id}")
    @Operation(summary = "Delete service", description = "Allows admin users to delete a service.")
    public String deleteCourse(@PathVariable Long id, @RequestBody MyServicesRequest entity) {
        return courseService.deleteCourse(id);
    }
    

}
