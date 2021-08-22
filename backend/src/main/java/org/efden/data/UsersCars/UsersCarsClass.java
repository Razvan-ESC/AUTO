package org.efden.data.UserCars;

import javax.persistence.*;

@Entity
@Table(name = "UsersCars")
public class UsersCarsClass {

    @Id
    @Column(name = "id", unique = true)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "id_user")
    private int idUser;

    @Column(name = "id_car")
    private int idCar;
}
