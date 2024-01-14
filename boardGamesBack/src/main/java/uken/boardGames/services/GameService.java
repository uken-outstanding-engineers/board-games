package uken.boardGames.services;

import uken.boardGames.model.Game;

import java.util.List;

public interface GameService {
    List<Game> getGames();
    Game saveGame(Game game);
    void deleteGameById(Long id);
    //Game editGame(Long id, Game gameDetails);
    Game findGameById(Long id);
    Game incrementLikes(Long id);
    Game decrementLikes(Long id);
}
