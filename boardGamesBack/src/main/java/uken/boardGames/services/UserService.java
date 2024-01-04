package uken.boardGames.services;

import uken.boardGames.model.User;

public interface UserService {
    User getUserById(Long id);

    User loginUser(String userid, String passwd);

    User createUser(User user);
    User updateUser(Long id, User updatedUserDetails);
    void deleteUser(Long id);
}
