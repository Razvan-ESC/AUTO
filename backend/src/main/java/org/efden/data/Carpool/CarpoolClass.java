package org.efden.data.Carpool;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "Carpool")
public class CarpoolClass {

    @Id
    @Column(name = "id_carpool", unique = true)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idCarpool;

    @Column(name = "id_pickup")
    private int idPickup;

    @Column(name = "id_pickupee")
    private int idPickupee;

    @Column(name = "carpool_date_time")
    private Date carpoolDateTime;
}
