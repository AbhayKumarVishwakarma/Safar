package com.safar.controller;


import com.safar.exception.ReservationException;
import com.safar.model.Reservation;
import com.safar.model.ReservationDTO;
import com.safar.service.ReservationService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/reservation")
public class ReservationController {
    @Autowired
    private ReservationService service;

    @PostMapping("/add/{key}")
    public ResponseEntity<Reservation> addReservation(@Valid @RequestBody ReservationDTO dto, @PathVariable String key) throws ReservationException {
        Reservation reservation = service.addReservation(dto, key);

        return  new ResponseEntity<>(reservation, HttpStatus.CREATED);
    }

    @PutMapping("/update/{rid}/{key}")
    public ResponseEntity<Reservation> updateReservation(@Valid @RequestBody ReservationDTO dto, @PathVariable String key, @PathVariable Integer rid) throws ReservationException{
        Reservation reservation = service.updateReservation(rid, dto, key);

        return  new ResponseEntity<>(reservation, HttpStatus.OK);
    }

    @DeleteMapping("delete/{key}/{rid}")
    public ResponseEntity<Reservation> deleteReservation(@PathVariable String key, @PathVariable Integer rid) throws ReservationException{
        Reservation reservation = service.deleteReservation(rid, key);

        return new ResponseEntity<>(reservation, HttpStatus.ACCEPTED);
    }

    @GetMapping("/reservations/{rid}/{key}")
    public ResponseEntity<Reservation> viewReservationById(@PathVariable Integer rid, @PathVariable String key) throws ReservationException {
        Reservation reservation = service.viewReservation(rid, key);

        return new ResponseEntity<>(reservation, HttpStatus.FOUND);
    }

    @GetMapping("/reservations/{key}")
    public ResponseEntity<List<Reservation>> viewAllReservation(@PathVariable String key) throws ReservationException {
        List<Reservation> reservations = service.getAllReservation(key);

        return new ResponseEntity<>(reservations, HttpStatus.FOUND);
    }

    @GetMapping("/userId/{uid}/{key}")
    public ResponseEntity<List<Reservation>> viewReservationsByUserId(@PathVariable Integer uid, @PathVariable String key) throws ReservationException{
        List<Reservation> reservations = service.viewReservationByUerId(uid, key);

        return  new ResponseEntity<>(reservations, HttpStatus.FOUND);
    }
}
