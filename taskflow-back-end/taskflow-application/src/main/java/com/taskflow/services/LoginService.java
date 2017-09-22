package com.taskflow.services;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.taskflow.services.dto.Token;

@CrossOrigin
@RestController
@RequestMapping(path="/services")
public class LoginService {

	@RequestMapping(path="/login", method=RequestMethod.POST)
	Token userLogin(@RequestParam("user") String user, @RequestParam("password") String password) {
		
		//TODO Implement login correctly
		if (user.equals("john.cena") && password.equals("1234")) {
			return new Token("xkjryteTFRFsgafGFG", "John Cena", 1, "Leader");
		} else {
			return new Token("", "", 0, "");
		}
	}
	
}
