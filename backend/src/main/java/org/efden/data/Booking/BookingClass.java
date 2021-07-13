package org.efden.data.Booking;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "Booking")
public class BookingClass {

    @Id
    @Column(name = "id_booking", unique = true)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idBooking;

    @Column(name = "date")
    private Date date;

    @Column(name = "booking_code")
    private String bookingCode;
}
