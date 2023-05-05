package com.safar.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.safar.model.Route;

public interface RouteRepository extends JpaRepository<Route, Integer>{
	
	public Route findByRouteFromAndRouteTo(String from,String to);	

}
