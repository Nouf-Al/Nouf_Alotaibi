package com.nouf.authentication.services;

import java.util.Optional;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import com.nouf.authentication.models.LoginUser;
import com.nouf.authentication.models.User;
import com.nouf.authentication.repositories.UserRepository;

@Service
public class UserService {
	@Autowired
	private final UserRepository userRepo;

	public UserService(UserRepository userRepo) {
		this.userRepo = userRepo;
	}

	public User findById(Long id) {
		if (id == null) {
			return null;
		}
		Optional<User> potentialUser = userRepo.findById(id);
		return potentialUser.isPresent() ? potentialUser.get() : null;
	}

	public User findByEmail(String email) {
		Optional<User> user = userRepo.findByEmail(email);
		return user.isPresent() ? user.get() : null;
	}

	public User register(User newUser, BindingResult result) {
		if (findByEmail(newUser.getEmail()) != null) {
			result.rejectValue("email", "Unique", "The email already exist.");
		}

		if (!newUser.getPassword().equals(newUser.getConfirm())) {
			result.rejectValue("confirm", "Matchs", "Your password and confirm password do not match.");
		}

		if (result.hasErrors()) {
			return null;
		} else {
			String hashed = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
			newUser.setPassword(hashed);
			return userRepo.save(newUser);
		}
	}

	public User login(LoginUser newLogin, BindingResult result) {
		if (result.hasErrors()) {
			return null;
		}
		User user = findByEmail(newLogin.getEmail());
		if (user == null) {
			result.rejectValue("email", "Unique", "Unknown email.");
			return null;
		}
		if (!BCrypt.checkpw(newLogin.getPassword(), user.getPassword())) {
			result.rejectValue("password", "Matches", "Invalid email or password.");
		}
		if (result.hasErrors()) {
			return null;
		} else {
			return user;
		}
	}
}