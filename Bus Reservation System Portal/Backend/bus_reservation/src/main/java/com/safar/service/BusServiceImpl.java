package com.safar.service;

import com.safar.exception.BusException;
import com.safar.model.Bus;
import com.safar.repository.BusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BusServiceImpl implements BusService{
    @Autowired
    private BusRepository busRepo;

    //admin access methods
    @Override
    public Bus addBus(Bus bus, String key) throws BusException {
        return busRepo.save(bus);
    }

    @Override
    public Bus updateBus(Bus bus, String key) throws BusException {
        return null;
    }

    @Override
    public Bus deleteBus(Integer busId, String key) throws BusException {
        Bus bus = busRepo.findById(busId).orElseThrow(() -> new BusException("Bus not found with busId: "+busId));
        busRepo.delete(bus);
        return bus;
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
        if(existingBus==null){
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
