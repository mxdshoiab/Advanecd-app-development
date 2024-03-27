package com.matrix.matrix.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.matrix.matrix.dto.request.BookingRequest;
import com.matrix.matrix.model.Booking;
import com.matrix.matrix.repository.BookingRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class BookingServiceImpl {
    private final BookingRepo instituteRepo;
    public String addInstitute(BookingRequest instituteRequest)
    {
        if(instituteRequest!=null)
        {
        var institute=Booking.builder()
        .iid(instituteRequest.getIid())
        .instituteName(instituteRequest.getInstituteName())
        .instituteLocation(instituteRequest.getInstituteLocation())
        .build();
        instituteRepo.save(institute);
        return "Booking Added Successfully";
        }
        return "Booking not added";
    }
    public List<Booking> getAllInstitution()
    {
        return instituteRepo.findAll();
    }
    public Booking getInstituteByID(Long id) {
        return instituteRepo.findByIid(id);
    }
    public List<Booking> getInstituteByName(String name) {
       List<Booking> instituteList=instituteRepo.findByInstituteName(name);
       if (!instituteList.isEmpty()) {
        return instituteList;
       }
       return null;
    }
    public String editInstitute(BookingRequest instituteRequest, Long id) {
        Booking institute=instituteRepo.findByIid(id);
        if(institute!=null)
        {
        var updatedInstitute=Booking.builder()
        .iid(id)
        .instituteName(instituteRequest.getInstituteName())
        .instituteLocation(instituteRequest.getInstituteLocation())
        .build();
        instituteRepo.save(updatedInstitute);
        return "Booking Updated";
        }   
        return "Booking Not Found!";
    }
    public String deleteInsitute(Long id) {
        Booking institute=instituteRepo.findByIid(id);
        if(institute!=null)
        {
        instituteRepo.deleteById(id);
        return "Booking deleted Successfully!";
        }   
        return "Booking Not Found!";
    }


}
