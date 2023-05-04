package com.safar.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class Bus {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer busID;
    private String busName;
    private String driverName;
    private String busType;
    private String routeFrom;
    private String routeTo;
    private LocalDate busJourneyDate;
    private String arrivalTime;
    private String departureTime;
    private Integer seats;
    private Integer availableSeat;
    private Integer fare;

    @ManyToOne
    private Route route;

    @JsonIgnore
    @OneToMany(mappedBy = "bus")
    private List<Reservation> reservationList = new ArrayList<>();
}
