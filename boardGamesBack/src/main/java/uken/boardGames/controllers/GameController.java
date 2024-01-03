package uken.boardGames.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
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

    @PostMapping("/add")
    public Game addGame(@RequestBody Game game) { return gameService.saveGame(game); }

    @PutMapping("/edit/{id}")
    public Game editGame(@PathVariable Long id, @RequestBody Game gameDetails) {
        Game existingGame = gameService.findGameById(id);

        if (existingGame != null) {
            existingGame.setTitle(gameDetails.getTitle());
            existingGame.setShortDescription(gameDetails.getShortDescription());
            existingGame.setLongDescription(gameDetails.getLongDescription());
            existingGame.setPublished(gameDetails.getPublished());
            existingGame.setMaxPlayers(gameDetails.getMaxPlayers());
            existingGame.setAge(gameDetails.getAge());
            existingGame.setPrice(gameDetails.getPrice());
            return gameService.saveGame(existingGame);
        } else {
            return null;
        }
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteGame(@PathVariable Long id) {
        return gameService.deleteGameById(id);
    }
}
