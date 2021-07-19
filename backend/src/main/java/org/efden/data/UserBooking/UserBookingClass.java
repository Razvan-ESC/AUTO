package org.efden.data.UserBooking;

import javax.persistence.*;

@Entity
@Table(name = "UserBooking")
public class UserBookingClass {

    @Id
    @Column(name = "id", unique = true)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "id_user")
    private int idUser;

    @Column(name = "id_booking")
    private int idBooking;
}
