package uken.boardGames.services.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import uken.boardGames.key.LikedGameKey;
import uken.boardGames.model.LikedGame;
import uken.boardGames.model.User;
import uken.boardGames.repository.LikedGameRepository;
import uken.boardGames.repository.UserRepository;
import uken.boardGames.services.UserService;
import lombok.extern.slf4j.Slf4j;

import java.util.Date;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final LikedGameRepository likedGameRepository;

    @Override
    public User loginUser(String username, String passwd) {
        User user = userRepository.findByUsername(username);

        if (user != null && user.getPasswd().equals(passwd)) {
            return user;
        } else {
            return null;
        }
    }

    public User getUser(Long id) { return findUserById(id); }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public User registerUser(User newUser) {
        if (newUser.getPermission() == null) {
            newUser.setPermission(1);
        }
        return userRepository.save(newUser);
    }
    /*public User updateUser(Long id, User updatedUserDetails) {
        User existingUser = userRepository.findById(id).orElse(null);

        if (existingUser != null) {
            if (updatedUserDetails.getUsername() != null)
                existingUser.setUsername(updatedUserDetails.getUsername());
            if (updatedUserDetails.getEmail() != null)
                existingUser.setEmail(updatedUserDetails.getEmail());

            return userRepository.save(existingUser);
        } else {
            return null;
        }
    }*/
    public List<User> getUsers() {
        return userRepository.findAll();
    }
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public void deleteLikedGame(Long userId, Long gameId) {
        userRepository.deleteLikedGameByUserIdAndGameId(userId, gameId);
    }

    public void addLikedGame(Long userId, Long gameId) {
        LikedGameKey likedGameKey = new LikedGameKey();
        LikedGame likedGame = new LikedGame();

        likedGameKey.setUserId(userId);
        likedGameKey.setGameId(gameId);
        likedGame.setId(likedGameKey);
        likedGame.setDate(null);

        likedGameRepository.save(likedGame);
    }

    public boolean verifyPassword(Long id, String currentPassword) {
        User user = userRepository.findById(id).orElse(null);
        return user != null && user.getPasswd().equals(currentPassword);
    }

    public boolean changeUserPassword(Long id, String newPassword) {
        User user = userRepository.findById(id).orElse(null);
        if (user != null) {
            user.setPasswd(newPassword);
            userRepository.save(user);
            return true;
        }
        return false;
    }

    public User findUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }
}
