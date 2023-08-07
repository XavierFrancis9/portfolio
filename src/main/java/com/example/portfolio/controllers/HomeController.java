package com.example.portfolio.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    // view home page
    @GetMapping("/")
    public String home() {
        return "index";
    }
    // view about page
    @GetMapping("/about")
    public String about() {
        return "about";
    }

    // view my projects page
    @GetMapping("/projects")
    public String projects() {
        return "projects";
    }

    // view contact me page
    @GetMapping("/contact")
    public String contact() {
        return "contact";
    }

    // view thank you page
    @GetMapping("/thankyou")
    public String thankyou() {
        return "thankyou";
    }
}


