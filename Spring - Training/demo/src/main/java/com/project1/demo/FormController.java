package com.project1.demo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class FormController {
    @GetMapping("/")
    public String welcome(){
        return "hi Shiv Sai";
    }

}
