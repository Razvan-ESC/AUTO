package org.efden.data.Car;

import org.springframework.data.repository.CrudRepository;

public interface CarRepository extends CrudRepository<CarClass, Integer> {

    public CarClass findByIdCar(int id);
}
