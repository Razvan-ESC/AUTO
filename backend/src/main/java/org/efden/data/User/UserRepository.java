package org.efden.data.User;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<UserClass, Integer> {

    public UserClass findByIdUser(int id);
}
