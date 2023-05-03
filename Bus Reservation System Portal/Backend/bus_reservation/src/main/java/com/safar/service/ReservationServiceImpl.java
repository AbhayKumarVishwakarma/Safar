package com.safar.service;

import com.safar.model.Reservation;
import com.safar.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class ReservationServiceImpl implements ReservationService{

    @Autowired
    private ReservationRepository repository;
    @Override
    public Reservation addReservation(Reservation reservation) {
        return repository.save(reservation);
    }

    @Override
    public Reservation updateReservation(Reservation reservation, Integer rid) {
        Optional<Reservation> optional = repository.findById(rid);

        if(optional.isEmpty()) System.out.println();

        Reservation reservation1 = optional.get();

        reservation1.setReservationType(reservation.getReservationType());
        reservation1.setSource(reservation.getSource());
        reservation1.setBus(reservation.getBus());

        return repository.save(reservation1);
    }

    @Override
    public Reservation deleteReservation(int rid) {

        Optional<Reservation> optional = repository.findById(rid);

        if (optional.isEmpty()) System.out.println();

        Reservation reservation = optional.get();
        repository.delete(reservation);

        return reservation;
    }

    @Override
    public Reservation viewReservation(int rid) {
        Optional<Reservation> optional = repository.findById(rid);

        if(optional.isEmpty()) System.out.println();

        return optional.get();
    }

    @Override
    public List<Reservation> viewAllReservation() {

        List<Reservation> list = repository.findAll();

        if(list == null) System.out.println();

        return list;
    }

    @Override
    public List<Reservation> getAllReservation(LocalDate date) {
        return null;
    }
}
