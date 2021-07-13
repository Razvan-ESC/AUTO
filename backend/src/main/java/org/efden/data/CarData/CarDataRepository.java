package org.efden.data.CarData;

import org.springframework.data.repository.CrudRepository;

public interface CarDataRepository extends CrudRepository<CarDataClass, Integer> {

    public CarDataClass findByIdCardata(int id);
}
