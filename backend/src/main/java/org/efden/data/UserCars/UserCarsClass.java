package org.efden.data.UserCars;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "UserCars")
public class UserCarsClass {

    @Column(name = "id_user")
    private int idUser;

    @Column(name = "id_car")
    private int idCar;
}
