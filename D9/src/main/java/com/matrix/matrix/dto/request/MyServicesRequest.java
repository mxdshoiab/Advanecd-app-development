package com.matrix.matrix.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class MyServicesRequest {
    private Long cid;
    private String courseName;
    private String courseDescription;
    private String courseDuration;
    private String coursePrice; 

}
