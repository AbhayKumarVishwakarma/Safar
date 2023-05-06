package com.safar.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.safar.exception.AdminException;
import com.safar.exception.RouteException;
import com.safar.model.Bus;
import com.safar.model.CurrentAdminSession;
import com.safar.model.Route;
import com.safar.repository.AdminRepository;
import com.safar.repository.BusRepository;
import com.safar.repository.CurrentAdminSessionRepository;
import com.safar.repository.RouteRepository;
@Service
public class RouteServiceImpl implements RouteService{
	
	@Autowired
	private RouteRepository  routerepository;
	
//	@Autowired
//	private BusRepository busrepository;
	
	@Autowired
	private CurrentAdminSessionRepository currentddminsessionrepository;
	
	@Autowired
	private AdminRepository  adminrepository;
	
	
	
	
	@Override
	public Route addRoute(Route route,String key) throws RouteException, AdminException {
		
		CurrentAdminSession loggedInAdmin= currentddminsessionrepository.findByaid(key);
		
		if(loggedInAdmin == null) {
			throw new AdminException("Please provide a valid id to add route !");
		}
		
		Route newRoute = routerepository.findByRouteFromAndRouteTo(route.getRouteFrom(), route.getRouteTo());
		
		if(newRoute != null) throw new RouteException("Route :"+ newRoute.getRouteFrom() +" to "+ newRoute.getRouteTo()+ " is already present !");
		
		
		List<Bus> buses = new ArrayList<>();	
		
		if(route != null) {
			route.setBusList(buses);
			return routerepository.save(route);
		}
		else {
			throw new RouteException("This root is not available");
		}
	}

	@Override
	public List<Route> viewAllRoute() throws RouteException {
			
		List<Route> routes=routerepository.findAll();
		
		if(routes.isEmpty())
			throw new RouteException("No route available");
			
		else
			return routes;	
			
	}


	
}
