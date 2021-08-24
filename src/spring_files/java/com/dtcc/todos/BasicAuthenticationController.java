package com.dtcc.todos;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class BasicAuthenticationController {

    @GetMapping(path="/basicauth")
    public AuthenticationBean helloWorldPathVariable(){
        System.out.println("in Authenticaltion bean");

        // throw new RuntimeException("Something went wrong");
        return new AuthenticationBean("You are autheticated.");

    }
}
