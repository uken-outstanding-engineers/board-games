package uken.boardGames.services;

import uken.boardGames.model.Game;
import uken.boardGames.model.User;

public interface UserService {
    User loginUser(String userid, String passwd);
    User getUser(Long id);
    User saveUser(User user);
    //User updateUser(Long id, User updatedUserDetails);
    void deleteLikedGame(Long userId, Long gameId);
    void deleteUser(Long id);
    boolean verifyPassword(Long id, String currentPassword);
    boolean changeUserPassword(Long id, String newPassword);
    User findUserById(Long id);
}
