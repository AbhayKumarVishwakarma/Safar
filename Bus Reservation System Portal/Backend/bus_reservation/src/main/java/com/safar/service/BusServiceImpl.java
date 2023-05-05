package com.safar.service;

import com.safar.exception.AdminException;
import com.safar.exception.BusException;
import com.safar.model.Bus;
import com.safar.model.CurrentAdminSession;
import com.safar.model.Route;
import com.safar.repository.BusRepository;
import com.safar.repository.CurrentAdminSessionRepository;
import com.safar.repository.RouteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class BusServiceImpl implements BusService{
    @Autowired
    private BusRepository busRepo;
    @Autowired(required = false)
    private RouteRepository routeRepo;
    @Autowired
    private CurrentAdminSessionRepository currAdminRepo;
    //admin access methods
    @Override
    public Bus addBus(Bus bus, String key) throws BusException , AdminException {
        CurrentAdminSession admin = currAdminRepo.findByaid(key);
        if(admin==null){
            throw new AdminException("Key is not valid! Please provide a valid key.");
        }

        Route route = new Route(); //finding and checking route => pending
        if(route==null) throw new BusException("Route is not valid");

        //adding this new bus to the route
        route.getBusList().add(bus);
        //adding route for this new bus
        bus.setRoute(route);
        //saving bus
        return busRepo.save(bus);
    }

    @Override
    public Bus updateBus(Bus bus, String key) throws BusException , AdminException{
        CurrentAdminSession admin = currAdminRepo.findByaid(key);
        if(admin==null){
            throw new AdminException("Key is not valid! Please provide a valid key.");
        }
        Optional<Bus> bus1 = busRepo.findById(bus.getBusId());
        if(!bus1.isPresent()){
            throw new BusException("Bus doesn't exist with busId: "+ bus.getBusId());
        }
        Bus existBus = bus1.get();
        //checking if bus scheduled or not , can be updated only if not scheduled
        if(existBus.getAvailableSeats() != existBus.getSeats()) throw new BusException("Scheduled bus can't be updated");

        Route route = new Route(); //finding and checking route => pending

        if(route==null) throw new BusException("Route is not valid");
        bus.setRoute(route);
        return busRepo.save(bus);
    }

    @Override
    public Bus deleteBus(Integer busId, String key) throws BusException, AdminException {
        CurrentAdminSession admin = currAdminRepo.findByaid(key);
        if(admin==null){
            throw new AdminException("Key is not valid! Please provide a valid key.");
        }

        Optional<Bus> bus = busRepo.findById(busId);

        if(bus.isPresent()){
            Bus existingBus = bus.get();

            if(LocalDate.now().isBefore(existingBus.getBusJourneyDate()) && existingBus.getAvailableSeats()!=existingBus.getSeats())
                throw new BusException("Cannot delete as the bus is scheduled and reservations are booked for the bus.");

            busRepo.delete(existingBus);
            return existingBus;

        } else throw  new BusException("Bus not found with busId: "+busId);

    }


    //admin + user access methods
    @Override
    public List<Bus> viewAllBuses() throws BusException {
        List<Bus> busList = busRepo.findAll();
        if(busList.isEmpty()){
            throw new BusException("No bus found at this moment. Try again later!");
        }
        return busList;
    }

    @Override
    public Bus viewBus(Integer busId) throws BusException {
        Optional<Bus> existingBus = busRepo.findById(busId);
        if(!existingBus.isPresent()){
            throw new BusException("No bus exist with this busId: "+ busId);
        }
        return existingBus.get();
    }

    @Override
    public List<Bus> viewBusByBusType(String busType) throws BusException {
        List<Bus> busListType = busRepo.findByBusType(busType);
        if(busListType.isEmpty()){
            throw new BusException("There are no buses with bus type: "+ busType);
        }
        return busListType;
    }

}
