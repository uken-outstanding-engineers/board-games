package uken.boardGames.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import uken.boardGames.model.User;
import uken.boardGames.services.UserService;

import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;
//    @PostMapping("/login")
//    public User loginUser(@RequestBody String userid, @RequestBody String passwd) {
//        return userService.loginUser(userid, passwd);
//        System.out.println("Wartosc userid: " + userid);
//        System.out.println("Wartosc passwd: " + passwd);
//        return null;
//    }
    @PostMapping("/login")
    public User loginUser(@RequestBody Map<String, String> user) {
        String userid = user.get("username");
        String passwd = user.get("password");

        //token
        return userService.loginUser(userid, passwd);
    }
}
