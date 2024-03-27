package com.matrix.matrix.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.matrix.matrix.model.MyServices;
import java.util.List;


public interface MyServicesRepo extends JpaRepository<MyServices,Long> {
    public MyServices findByCid(Long cid);
    public List<MyServices> findByCourseName(String courseName);
}
