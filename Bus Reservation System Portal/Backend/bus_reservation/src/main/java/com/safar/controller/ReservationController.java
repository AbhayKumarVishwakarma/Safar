package com.safar.controller;


import com.safar.exception.ReservationException;
import com.safar.model.Reservation;
import com.safar.service.ReservationService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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


    @GetMapping("/getById/{rid}")
    public ResponseEntity<Reservation> getReservationById(@PathVariable Integer rid) throws ReservationException {
        Reservation reservation = service.viewReservation(rid);

        return  new ResponseEntity<>(reservation, HttpStatus.FOUND);
    }
}
