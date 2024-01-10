package uken.boardGames.services;

import uken.boardGames.model.Game;
import uken.boardGames.model.User;

import java.util.List;

public interface UserService {
    List<User> getUsers();
    User loginUser(String userid, String passwd);
    User getUser(Long id);
    User saveUser(User user);
    User registerUser(User newUser);
    //User updateUser(Long id, User updatedUserDetails);
    void deleteLikedGame(Long userId, Long gameId);
    void deleteUser(Long id);
    boolean verifyPassword(Long id, String currentPassword);
    boolean changeUserPassword(Long id, String newPassword);
    User findUserById(Long id);
}
