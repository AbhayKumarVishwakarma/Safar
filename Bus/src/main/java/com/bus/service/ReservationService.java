package com.bus.service;

import com.bus.model.Reservation;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public interface ReservationService {
    public Reservation addReservation(Reservation reservation);
    public Reservation updateReservation(Reservation reservation);
    public Reservation deleteReservation(int rid);
    public Reservation viewReservation(int rid);
    public List<Reservation> getAllReservation(LocalDate date);
}
