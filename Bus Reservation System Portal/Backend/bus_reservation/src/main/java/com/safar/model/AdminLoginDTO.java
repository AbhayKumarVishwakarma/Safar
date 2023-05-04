package com.safar.model;

import jakarta.validation.constraints.Email;
import lombok.Data;

@Data
public class AdminLoginDTO {
    @Email
    private String email;
    private String password;
}
