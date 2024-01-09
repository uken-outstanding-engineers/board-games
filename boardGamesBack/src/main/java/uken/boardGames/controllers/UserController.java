package uken.boardGames.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import uken.boardGames.model.User;
import uken.boardGames.services.UserService;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;
    @PostMapping("/login")
    public User loginUser(@RequestBody Map<String, String> user) {
        String userid = user.get("username");
        String passwd = user.get("password");

        //token
        return userService.loginUser(userid, passwd);
    }

    @GetMapping("/user/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.getUser(id);
    }

    @PutMapping("/update/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        User existingUser = userService.findUserById(id);

        if (existingUser != null) {
            existingUser.setUsername(userDetails.getUsername());
            existingUser.setEmail(userDetails.getEmail());
            existingUser.setDescription(userDetails.getDescription());

            return userService.saveUser(existingUser);
        } else {
            return null;
        }
    }

    @DeleteMapping("/deleteLikedGames/{userId}/{gameId}")
    public void deleteLikedGame(@PathVariable Long userId, @PathVariable Long gameId) {
        userService.deleteLikedGame(userId, gameId);
    }

    @PostMapping("/verifyPassword/{id}")
    public boolean verifyPassword(@PathVariable Long id, @RequestBody String currentPassword) {
        return userService.verifyPassword(id, currentPassword);
    }

    @PostMapping("/changePassword/{id}")
    public boolean changeUserPassword(@PathVariable Long id, @RequestBody String newPassword) {
        return userService.changeUserPassword(id, newPassword);
    }
}
