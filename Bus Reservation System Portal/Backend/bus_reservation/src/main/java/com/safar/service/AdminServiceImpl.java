package com.safar.service;

import com.safar.exception.AdminException;
import com.safar.model.Admin;
import com.safar.model.CurrentAdminSession;
import com.safar.repository.AdminRepository;
import com.safar.repository.CurrentAdminSessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService{

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private CurrentAdminSessionRepository adminSessionRepository;

    @Override
    public Admin createAdmin(Admin admin) throws AdminException {
        Admin a = adminRepository.findByEmail(admin.getEmail());
        if(a != null) throw new AdminException("Admin is already register with email (" + a.getEmail() + ")");
        return adminRepository.save(admin);
    }

    @Override
    public Admin updateAdmin(Admin admin, String key) throws AdminException {
        CurrentAdminSession adminSession = adminSessionRepository.findByaid(key);
        if(adminSession == null) throw new AdminException("Please enter valid key or login first!");
        if(admin.getAdminID() != adminSession.getAdminID()) throw new AdminException("Invalid admin details, please login for updating admin!");
        return adminRepository.save(admin);
    }
}
