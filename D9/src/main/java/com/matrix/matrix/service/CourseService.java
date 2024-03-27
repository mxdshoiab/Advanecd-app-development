package com.matrix.matrix.service;

import java.util.Optional;

import com.matrix.matrix.dto.request.MyServicesRequest;
import com.matrix.matrix.model.MyServices;

public interface CourseService {
    String addCourse(MyServicesRequest courseRequest);
    Optional<MyServices> getAllCourses();
    Optional<MyServices> getCourseByID(Long id);


}
