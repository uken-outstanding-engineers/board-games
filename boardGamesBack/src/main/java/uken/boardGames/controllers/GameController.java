package uken.boardGames.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uken.boardGames.model.Game;
import uken.boardGames.services.GameService;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/game")
public class GameController {
    @Autowired
    private GameService gameService;
    @GetMapping("/all")
    public List<Game> getAllGames() {
        return gameService.getGames();
    }
}
