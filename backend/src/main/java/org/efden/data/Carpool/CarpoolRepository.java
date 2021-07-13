package org.efden.data.Carpool;

import org.springframework.data.repository.CrudRepository;

public interface CarpoolRepository extends CrudRepository<CarpoolClass, Integer> {

    public CarpoolClass findByIdCarpool(int id);
}
