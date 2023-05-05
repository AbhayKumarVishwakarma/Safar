package com.safar.service;

import com.safar.exception.ReservationException;
import com.safar.model.*;
import com.safar.repository.ReservationRepository;
import com.safar.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

@Service
public class ReservationServiceImpl implements ReservationService{

    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CurrentAdminSession currentAdminSession;

    @Autowired
    private BusService busService;

    @Override
    public Reservation addReservation(ReservationDTO dto, String key) throws ReservationException {

//        CurrentUserSession userSession = ;

          Reservation reservation = new Reservation();

          if(dto.getJourneyDate().isBefore(LocalDate.now())) throw  new ReservationException("Journey Date should be in Future");



          reservation.setSource(dto.getSource());
          reservation.setDestination(dto.getDestination());
          reservation.setDate(dto.getJourneyDate());
          reservation.setStatus("Successful");
          reservation.setDate(LocalDate.now());
          reservation.setTime(LocalTime.now());
          reservation.setBus(null);
          reservation.setFare(null);
          reservation.setBookedSeat(dto.getBookedSeat());
          reservation.setUser(null);

        return reservationRepository.save(reservation);
    }

    @Override
    public Reservation viewReservation(Integer rid, String key) throws ReservationException {

        Optional<Reservation> optional = reservationRepository.findById(rid);

        if(optional.isEmpty()) throw new ReservationException("Reservation with given id is not found");

        return null;
    }

    @Override
    public List<Reservation> getAllReservation(String key) throws ReservationException {


        List<Reservation> list = reservationRepository.findAll();

        if(list == null) throw new ReservationException("Reservation Not found");

        return list;
    }

    @Override
    public List<Reservation> viewReservationByUerId(Integer uid, String key) {

        return null;
    }

    @Override
    public Reservation deleteReservation(Integer rid, String key) {
        return null;
    }

    @Override
    public Reservation updateReservation(ReservationDTO dto, String key) {
        return null;
    }


}
