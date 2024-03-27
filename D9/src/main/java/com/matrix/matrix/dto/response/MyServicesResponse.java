package com.matrix.matrix.dto.response;

import com.matrix.matrix.model.Booking;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
@Data
@Builder
@AllArgsConstructor
public class MyServicesResponse {
    private Long cid;
    private String courseName;
    private String courseDescription;
    private String courseDuration;
    private String coursePrice; 
    private Booking institute;
}
