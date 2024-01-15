package uken.boardGames.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import uken.boardGames.model.Game;
import uken.boardGames.services.GameService;
import org.springframework.util.StringUtils;


import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
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

    @PostMapping("/uploadImage/{gameId}")
    public ResponseEntity<String> uploadGameImage(@PathVariable Long gameId, @RequestParam("file") MultipartFile file) {
        try {
            String uploadDirectory = "C:/Users/Admin/board-games/board-games-front/src/assets/images/";
            String fileExtension = StringUtils.getFilenameExtension(file.getOriginalFilename());
            String imgPath = "p" + gameId + "." + fileExtension;
            String filePath = uploadDirectory + imgPath;

            Path directoryPath = Paths.get(uploadDirectory);
            Files.createDirectories(directoryPath);

            Game existingGame = gameService.findGameById(gameId);

            if (existingGame != null) {
                existingGame.setImg(imgPath);
                gameService.saveGame(existingGame);
            }

            file.transferTo(new File(filePath));
            return ResponseEntity.ok("Plik został zapisany pomyślnie.");
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Błąd podczas zapisywania pliku.");
        }
    }
    /*public void uploadGameImage(@PathVariable Long gameId, @RequestParam("file") MultipartFile file) throws IOException {
        String filePath = "C:/Users/Admin/board-games/board-games-front/src/assets/images" + gameId + "_" + file.getOriginalFilename();
        file.transferTo(new File(filePath));
    }*/

    @DeleteMapping("/delete/{id}")
    public void deleteGame(@PathVariable Long id) {
        gameService.deleteGameById(id);
    }

    @PutMapping("/update-likes/{id}")
    public ResponseEntity<Game> updateLikes(@PathVariable Long id) {
        Game updatedGame = gameService.incrementLikes(id);

        if (updatedGame != null) {
            return new ResponseEntity<>(updatedGame, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/update-dislikes/{id}")
    public ResponseEntity<Game> updateDislikes(@PathVariable Long id) {
        Game updatedGame = gameService.decrementLikes(id);

        if (updatedGame != null) {
            return new ResponseEntity<>(updatedGame, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
