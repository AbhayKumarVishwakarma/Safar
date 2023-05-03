package com.safar.controller;


import com.safar.exception.ReservationException;
import com.safar.model.Reservation;
import com.safar.service.ReservationService;
import jakarta.validation.Valid;
import org.aspectj.weaver.ast.Literal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/reservation")
public class ReservationController {

    @Autowired
    private ReservationService service;

    @PostMapping("/add")
    public ResponseEntity<Reservation> addReservation(@Valid @RequestBody Reservation reservation){
        Reservation reservation1 = service.addReservation(reservation);

        return new ResponseEntity<>(reservation1, HttpStatus.CREATED);
    }

    @PutMapping("/update/{rid}")
    public ResponseEntity<Reservation> updateReservation(@Valid @RequestBody Reservation reservation, @PathVariable Integer rid) throws ReservationException {
        Reservation reservation1 = service.updateReservation(reservation, rid);

        return  new ResponseEntity<>(reservation1, HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/delete/{rid}")
    public ResponseEntity<Reservation> deleteReservation(@PathVariable Integer rid) throws ReservationException {
        Reservation reservation = service.deleteReservation(rid);

        return  new ResponseEntity<>(reservation, HttpStatus.OK);
    }

    @GetMapping("/getById/{rid}")
    public ResponseEntity<Reservation> getReservationById(@PathVariable Integer rid) throws ReservationException {
        Reservation reservation = service.viewReservation(rid);

        return  new ResponseEntity<>(reservation, HttpStatus.FOUND);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Reservation>> getAllReservation() throws ReservationException {
        List<Reservation> list = service.viewAllReservation();

        return new ResponseEntity<>(list, HttpStatus.FOUND);
    }

    @GetMapping("/getByDate")
    public ResponseEntity<List<Reservation>> getAllReservationByDate(@RequestBody LocalDate date) throws ReservationException {
        List<Reservation> list = service.getAllReservation(date);

        return new ResponseEntity<>(list, HttpStatus.FOUND);
    }
}
