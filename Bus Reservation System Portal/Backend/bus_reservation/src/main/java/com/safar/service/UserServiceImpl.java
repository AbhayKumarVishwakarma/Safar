package com.safar.service;

import com.safar.exception.AdminException;
import com.safar.exception.UserException;
import com.safar.model.CurrentAdminSession;
import com.safar.model.CurrentUserSession;
import com.safar.model.User;
import com.safar.model.UserDAO;
import com.safar.repository.CurrentAdminSessionRepository;
import com.safar.repository.CurrentUserSessionRepository;
import com.safar.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CurrentUserSessionRepository userSessionRepository;

    @Autowired
    private CurrentAdminSessionRepository adminSession;

    @Override
    public User createUser(User user) throws UserException {
        User registeredUser = userRepository.findByEmail(user.getMobile());
        if(registeredUser != null) throw new UserException("User is already registered!");
        return userRepository.save(user);
    }

    @Override
    public User updateUser(UserDAO userDAO, String key) throws UserException {
        CurrentUserSession loggedInUser = userSessionRepository.findByUuid(key);
        if(loggedInUser == null)  throw new UserException("Please enter a valid key or login first!");
        Optional<User> optional = userRepository.findById(loggedInUser.getUserID());
        
        if(optional.isEmpty()) throw new UserException("User Not found!!!");
        User user = optional.get();
        user.setEmail(userDAO.getEmail());
        user.setFirstName(userDAO.getFirstName());
        user.setLastName(userDAO.getLastName());
        user.setMobile(userDAO.getMobile());
        
        return userRepository.save(user);
    }

    @Override
    public User deleteUser(Integer userID, String key) throws UserException, AdminException {
        CurrentAdminSession loggedInAdmin = adminSession.findByaid(key);
        if(loggedInAdmin == null)  throw new AdminException("Please enter a valid key or login first!");
        User user = userRepository.findById(userID).orElseThrow(() -> new UserException("Invalid user Id!"));
        userRepository.delete(user);
        return user;
    }

    @Override
    public User viewUserById(Integer userID, String key) throws UserException, AdminException {
        CurrentAdminSession loggedInAdmin = adminSession.findByaid(key);
        if(loggedInAdmin == null)  throw new AdminException("Please enter a valid key or login first!");
        User user = userRepository.findById(userID).orElseThrow(() -> new UserException("Invalid user Id!"));
        return user;
    }

    @Override
    public List<User> viewAllUser(String key) throws UserException, AdminException {
        CurrentAdminSession loggedInAdmin = adminSession.findByaid(key);
        if(loggedInAdmin == null)  throw new AdminException("Please enter a valid key or login first!");
        List<User> list = userRepository.findAll();
        if(list.isEmpty())  throw new UserException("No users found!");
        return list;
    }

	@Override
	public Integer getAllUserCount() {
		return userRepository.findAll().size();
	}
}
