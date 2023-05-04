package com.safar.service;

import com.safar.exception.ReservationException;
import com.safar.model.*;
import com.safar.repository.ReservationRepository;
import com.safar.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;

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

        CurrentUserSession userSession = ;

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
}
