package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class MainApplication {
    public static void main(String[] args) {
        SpringApplication.run(MainApplication.class, args);
    }

    @GetMapping("/greet")
    public Dog greet() {
        Dog dogTim = new Dog(new Animal("dog", 4), "Tim");

        return dogTim;
    }

    record Animal(String animalType, int numberOfLegs) {}

    record Dog(Animal race, String name) {}
}
