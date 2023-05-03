package com.safar.model;


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
    private int reservationId;
    private String reservationStatus;

    @NotNull(message = "reservation Type must required")
    private String reservationType;
    private LocalDate reservationDate;
    private LocalTime reservationTime;

    @NotNull(message = "source must required")
    private String source;
    private Bus bus;
}
