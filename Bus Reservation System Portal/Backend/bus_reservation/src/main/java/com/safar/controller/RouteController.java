package com.safar.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.safar.exception.AdminException;
import com.safar.exception.RouteException;
import com.safar.model.Route;
import com.safar.service.RouteService;

import jakarta.validation.Valid;

@RestController
public class RouteController {
	
	@Autowired
	private RouteService routeService;
	
	@PostMapping("/route/admin/{aid}")
	public ResponseEntity<Route> addRoute(@Valid @RequestBody Route route,@PathVariable String aid) throws RouteException, AdminException{
		
		Route newRoute= routeService.addRoute(route,aid);
		
		return new ResponseEntity<Route>(newRoute,HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/routes")
	public ResponseEntity<List<Route>> getAllrouteHandler() throws RouteException{
		
		List<Route> route= routeService.viewAllRoute();
		
		return new ResponseEntity<>(route,HttpStatus.OK);
	}
	
	
	
	
	
	

	@GetMapping("/routes/{routeID}")
	public ResponseEntity<List<Route>> getAllroutebyrouteidHandler() throws RouteException{
		
		List<Route> route= routeService.viewAllRoute();
		
		return new ResponseEntity<>(route,HttpStatus.OK);
	}
	
	
	
	@PutMapping("/route/admin/{aid}")
	public ResponseEntity<Route> updateRoute(@Valid @RequestBody Route route,@PathVariable String aid) throws RouteException, AdminException{
		
		Route newRoute= routeService.updateRoute(route,aid);
		
		return new ResponseEntity<Route>(newRoute,HttpStatus.OK);
	}
	
	@DeleteMapping("/route/admin/{routeID}/{aid}")
	public ResponseEntity<Route> DeleteRoute(@PathVariable Integer routeID,@PathVariable String aid) throws RouteException, AdminException{
		
		Route route = routeService.deleteRoute(routeID,aid);
		
		return new ResponseEntity<Route>(route,HttpStatus.OK);
	}
	
}
