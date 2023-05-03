package com.safar.service;

import com.safar.model.Reservation;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public interface ReservationService {
    public Reservation addReservation(Reservation reservation);

    public Reservation updateReservation(Reservation reservation, Integer rid);

    public Reservation deleteReservation(int rid);

    public Reservation viewReservation(int rid);

    public List<Reservation> viewAllReservation();

    public List<Reservation> getAllReservation(LocalDate date);
}
