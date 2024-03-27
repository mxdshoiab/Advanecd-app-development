package com.matrix.matrix.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.matrix.matrix.model.Booking;
import java.util.List;

@Repository
public interface BookingRepo extends JpaRepository<Booking,Long> {

    Booking findByIid(Long id);
    List<Booking> findByInstituteName(String instituteName);

}
