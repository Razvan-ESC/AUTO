package org.efden.data.Car;

import javax.persistence.*;

@Entity
@Table(name = "Car")
public class CarClass {

    @Id
    @Column(name = "id_car", unique = true)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idCar;

    @Column(name = "brand")
    private String brand;

    @Column(name = "model")
    private String model;

    @Column(name = "year")
    private int year;
}
