package com.safar.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
public class Feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer feedbackID;
    private Integer driverRating;
    private Integer serviceRating;
    private Integer overallRating;
    private String comments;
    private LocalDateTime feedbackTime;

    @OneToOne
    private Bus bus;

    @ManyToOne
    private User user;
}
