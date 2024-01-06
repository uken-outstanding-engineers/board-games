package uken.boardGames.services;

import org.springframework.http.ResponseEntity;
import uken.boardGames.model.Game;

import java.util.List;

public interface GameService {
    List<Game> getGames();
    Game saveGame(Game game);
    ResponseEntity<String> deleteGameById(Long id);
    //Game editGame(Long id, Game gameDetails);

    Game findGameById(Long id);
}
