package org.efden.data.UserBooking;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "UserBooking")
public class UserBookingClass {

    @Column(name = "id_user")
    private int idUser;

    @Column(name = "id_booking")
    private int idBooking;
}
