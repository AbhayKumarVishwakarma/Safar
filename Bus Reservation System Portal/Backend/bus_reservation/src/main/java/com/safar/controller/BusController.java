package com.safar.controller;

import com.safar.exception.BusException;
import com.safar.model.Bus;
import com.safar.service.BusService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BusController {

    @Autowired
    private BusService busServ;

    //admin endpoints

    @PostMapping("/buses/admin")
    public ResponseEntity<Bus> addBusHandler(@Valid @RequestBody Bus bus, String key)throws BusException {

        Bus newBus = busServ.addBus(bus,key);
        return new ResponseEntity<>(newBus, HttpStatus.CREATED);


    }




    @DeleteMapping("/buses/admin/{busId}")
    public ResponseEntity<Bus> deleteBusByBusIdHandler(@PathVariable("busId") Integer busId, String key) throws BusException{
        Bus deletedBus = busServ.deleteBus(busId,key);
        return new ResponseEntity<>(deletedBus,HttpStatus.OK);
    }

    //shared endpoints (user and admin both)
    @GetMapping("/buses")
    public ResponseEntity<List<Bus>> getAllBusesHandler()throws BusException{
        List<Bus> allBuses = busServ.viewAllBuses();
        return new ResponseEntity<>(allBuses,HttpStatus.OK);
    }

    @GetMapping("/buses/{busId}")
    public ResponseEntity<Bus> getBusByIdHandler(@PathVariable("busId") Integer busId) throws BusException{
        Bus bus = busServ.viewBus(busId);
        return new ResponseEntity<>(bus,HttpStatus.OK);
    }

    @GetMapping("/typelybuses/{busType}")
    public ResponseEntity<List<Bus>> getBusesByBusTypeHandler(@PathVariable("busType") String busType) throws BusException{
        List<Bus> busList = busServ.viewBusByBusType(busType);
        return new ResponseEntity<>(busList,HttpStatus.OK);
    }
}

// format for sending post request
//{
//        "busId": 0,
//        "busName": "string",
//        "driverName": "string",
//        "busType": "string",
//        "routeFrom": "string",
//        "routeTo": "string",
//        "arrivalTime": "08:30:00",
//        "departureTime": "09:00:00",
//        "seats": 10,
//        "availableSeats": 5
//        }