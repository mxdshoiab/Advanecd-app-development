package com.matrix.matrix.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.matrix.matrix.dto.request.MyServicesRequest;
import com.matrix.matrix.model.MyServices;
import com.matrix.matrix.repository.MyServicesRepo;

import lombok.RequiredArgsConstructor;
@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class MyServicesServiceImpl{
    
    private final MyServicesRepo courseRepo;

    //POST
    public String addCourse(MyServicesRequest courseRequest) {
        var course=MyServices.builder()
        .cid(courseRequest.getCid())
        .courseName(courseRequest.getCourseName())
        .courseDescription(courseRequest.getCourseDescription())
        .courseDuration(courseRequest.getCourseDuration())
        .coursePrice(courseRequest.getCoursePrice())
        .build();
        courseRepo.save(course);
        return "Service Added";
    }

  //GET
  //GETALL
    public List<MyServices> getAllCourses() {
        
        return courseRepo.findAll();
    }
    //GETBYID
    public MyServices getCourseByID(Long Id)
    {
        MyServices course=courseRepo.findByCid(Id);
        if(course!=null)
        {
            return course;
        }
        else
        {
            return null;
        }
    }
    //GET COURSE by NAME
    public List<MyServices> getCourseByName(String name)
    {
        List<MyServices> course=courseRepo.findByCourseName(name);
        if(!course.isEmpty())
        {
            return course;
        }
        else
        {
            return null;
        }
    }
    public String editCourse(MyServicesRequest courseRequest, Long id)
    {
        MyServices course=courseRepo.findByCid(id);
        if(course!=null)
        {
            var updatedCourse=MyServices.builder()
            .cid(courseRequest.getCid())
            .courseName(courseRequest.getCourseName())
            .courseDescription(courseRequest.getCourseDescription())
            .courseDuration(courseRequest.getCourseDuration())
            .coursePrice(courseRequest.getCoursePrice())
            .build();
            courseRepo.save(updatedCourse);
            return "Service Updated";
        }
        return "Service does not exits in DB!";
    }
    public String deleteCourse(Long id)
    {
        MyServices course=courseRepo.findByCid(id);
        if(course!=null)
        {
            courseRepo.deleteById(id);
            return "Deleted successfully";
        }
        return "Service not found!";
    }
    
}
