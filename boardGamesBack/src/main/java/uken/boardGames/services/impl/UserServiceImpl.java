package uken.boardGames.services.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import uken.boardGames.model.User;
import uken.boardGames.repository.UserRepository;
import uken.boardGames.services.UserService;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public User loginUser(String userid, String passwd) {
        log.info("Próba logowania dla użytkownika: {}", userid);
        User user = userRepository.findByUserid(userid);

        if (user != null && user.getPassword().equals(passwd)) {
            return user;
        } else {
            return null;
        }
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public User updateUser(Long id, User updatedUserDetails) {
        User existingUser = userRepository.findById(id).orElse(null);

        if (existingUser != null) {
            // Tutaj uaktualnij istniejące informacje o użytkowniku na podstawie updatedUserDetails

            return userRepository.save(existingUser);
        } else {
            return null;
        }
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
