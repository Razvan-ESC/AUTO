package org.efden.data.UsersBooking;

import javax.persistence.*;

@Entity
@Table(name = "UserBooking")
public class UsersBookingClass {

    @Id
    @Column(name = "id", unique = true)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "id_user")
    private int idUser;

    @Column(name = "id_booking")
    private int idBooking;
}
