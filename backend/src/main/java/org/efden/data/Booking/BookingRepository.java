package org.efden.data.Booking;

import org.springframework.data.repository.CrudRepository;

public interface BookingRepository extends CrudRepository<BookingClass, Integer> {

    public BookingClass findByIdBooking(int id);
}
