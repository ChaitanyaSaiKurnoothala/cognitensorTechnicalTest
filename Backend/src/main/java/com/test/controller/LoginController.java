package com.test.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.test.model.Login;
import com.test.model.ResponseModel;

@RestController
public class LoginController {
	
	@Autowired
	ResponseModel error;
	
	@PostMapping("/loginDetails")
	public ResponseModel getLoginDetails(@RequestBody Login login) {
	System.out.println("reached here in the LoginDetails method"+login);
	System.out.println(login.getUsername());
	System.out.println(login.getPassword());
	if(login.getUsername().equals("testuser@test.com") && login.getPassword().equals("testpass")) {
		error.setError("");
	}
	else {
		error.setError("Invalid username or password");
	}
	return error;
	}
	
	
		
	
}
