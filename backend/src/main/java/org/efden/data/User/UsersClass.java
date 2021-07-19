package org.efden.data.User;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "User")
public class UserClass {

    @Id
    @Column(name = "id_user", unique = true)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idUser;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "email")
    private String email;

    @Column(name = "date_of_birth")
    private Date doB;

    @Column(name = "gender")
    private String gender;
}
