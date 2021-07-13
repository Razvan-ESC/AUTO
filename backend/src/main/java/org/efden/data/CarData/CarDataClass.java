package org.efden.data.CarData;

import javax.persistence.*;

@Entity
@Table(name = "CarData")
public class CarDataClass {

    @Id
    @Column(name = "id_cardata", unique = true)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idCardata;

    @Column(name = "brand")
    private String brand;

    @Column(name = "model")
    private String model;

    @Column(name = "battery_cap")
    private int batteryCap;

    @Column(name = "range")
    private int range;

    @Column(name = "charge_port")
    private String chargePort;

    @Column(name = "fastcharge_port")
    private String fastchargePort;
}
