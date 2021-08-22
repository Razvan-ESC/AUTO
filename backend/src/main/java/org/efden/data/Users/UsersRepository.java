package org.efden.data.User;

import org.springframework.data.repository.CrudRepository;

public interface UsersRepository extends CrudRepository<UsersClass, Integer> {

    public UsersClass findByIdUser(int id);
}
