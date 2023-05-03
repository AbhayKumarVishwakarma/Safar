package com.bus.service;

import com.bus.model.Reservation;
import com.bus.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ReservationServiceImpl implements ReservationService{

    @Autowired
    private ReservationRepository repository;

    @Override
    public Reservation addReservation(Reservation reservation) {
        return null;
    }

    @Override
    public Reservation updateReservation(Reservation reservation) {
        return null;
    }

    @Override
    public Reservation deleteReservation(int rid) {
        return null;
    }

    @Override
    public Reservation viewReservation(int rid) {
        return null;
    }

    @Override
    public List<Reservation> getAllReservation(LocalDate date) {
        return null;
    }
}
