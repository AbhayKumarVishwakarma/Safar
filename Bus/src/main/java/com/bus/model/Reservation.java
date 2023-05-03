package com.bus.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Reservation {

    @Id
    private Integer reservationId;
    private String reservationStatus;

    @NotNull(message = "Reservation Type must required")
    private String reservationType;

    private LocalDate reservationDate;
    private LocalTime reservationTime;

    @NotNull(message = "Source must required")
    private String source;

    @NotNull(message = "Destination must required")
    private String destination;


    private Bus bus;
}
