package com.safar.service;

import com.safar.exception.ReservationException;
import com.safar.model.Reservation;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public interface ReservationService {
    public Reservation addReservation(Reservation reservation);

    public Reservation updateReservation(Reservation reservation, Integer rid) throws ReservationException;

    public Reservation deleteReservation(int rid) throws ReservationException;

    public Reservation viewReservation(int rid) throws ReservationException;

    public List<Reservation> viewAllReservation() throws ReservationException;

    public List<Reservation> getAllReservation(LocalDate date) throws ReservationException;
}
