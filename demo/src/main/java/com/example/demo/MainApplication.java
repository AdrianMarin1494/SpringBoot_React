package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@SpringBootApplication
@RestController
public class MainApplication {
    public static void main(String[] args) {
        SpringApplication.run(MainApplication.class, args);
    }

    @GetMapping("/greet")
    public List<Dog> greet() {
        Dog dogTim = new Dog(new Animal("dog", 4), "Tim");
        Dog dogKim = new Dog(new Animal("dog", 4), "Kim");
        Dog dogJim = new Dog(new Animal("dog", 4), "Jim");
        ArrayList<Dog> dogs = new ArrayList<>();
        dogs.add(dogTim);
        dogs.add(1, dogKim);
        dogs.add(dogJim);
        dogs.remove(dogJim);
        dogs.indexOf(dogKim);

        LinkedList<Dog> dogsLinkedList = new LinkedList<>();
        dogsLinkedList.addFirst(dogTim);
        dogsLinkedList.get(0);

        HashMap<Integer, String> dictionary = new HashMap<>();
        dictionary.put(0, "first");
        dictionary.get(0);
        dictionary.containsKey(0);
        dictionary.containsValue("first");
        dictionary.remove(0);

        for (Integer key : dictionary.keySet()) {
            System.out.println(key);
        }
        Set<String> theSet = new HashSet<>();
        theSet.add("first");
        theSet.contains("first");

        return dogs;

    }

    record Animal(String animalType, int numberOfLegs) {}

    record Dog(Animal race, String name) {}
}
