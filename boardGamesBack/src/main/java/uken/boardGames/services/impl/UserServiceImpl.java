package uken.boardGames.services.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import uken.boardGames.dto.UserDTO;
import uken.boardGames.key.LikedGameKey;
import uken.boardGames.model.Game;
import uken.boardGames.model.LikedGame;
import uken.boardGames.model.User;
import uken.boardGames.repository.LikedGameRepository;
import uken.boardGames.mapper.UserMapper;
import uken.boardGames.repository.UserRepository;
import uken.boardGames.repository.GameRepository;
import uken.boardGames.services.UserService;
import lombok.extern.slf4j.Slf4j;

import java.util.Date;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final GameRepository gameRepository;
    private final LikedGameRepository likedGameRepository;
    private final UserMapper userMapper;
    @Override
    public User loginUser(String username, String passwd) {
        User user = userRepository.findByUsername(username);

        if (user != null && user.getPasswd().equals(passwd)) {
            return user;
        } else {
            return null;
        }
    }

    //public User getUser(Long id) { return findUserById(id); }
    public UserDTO getUser(Long id) {
        User user = findUserById(id);
        List<LikedGame> likedGames = user.getLikedGame();

        UserDTO userDTO = userMapper.userToUserDTO(user);
        userDTO.setLikedGame(userMapper.likedGamesToLikedGameDTO(user.getLikedGame()));


        return userDTO;
    }

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
        User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("User not found"));
        Game game = gameRepository.findById(gameId).orElseThrow(() -> new IllegalArgumentException("Game not found"));

        LikedGameKey likedGameKey = new LikedGameKey(userId, gameId);

        if (likedGameRepository.findById(likedGameKey).isPresent()) {
            throw new IllegalArgumentException("LikedGame entry already exists");
        }

        LikedGame likedGame = new LikedGame(likedGameKey, user, game, new Date());
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
