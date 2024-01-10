package uken.boardGames.services.impl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import uken.boardGames.model.Game;
import uken.boardGames.repository.GameRepository;
import uken.boardGames.services.GameService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GameServiceImpl implements GameService {
    private final GameRepository gameRepository;

    @Override
    public List<Game> getGames() {
        return gameRepository.findAll();
    }

    public Game saveGame(Game game) {return gameRepository.save(game);}

    /*public Game editGame(Long id, Game updatedGameDetails) {
        Game existingGame = gameRepository.findById(id).orElse(null);

        if (existingGame != null) {
            if (updatedGameDetails.getTitle() != null)
                existingGame.setTitle(updatedGameDetails.getTitle());
            if (updatedGameDetails.getShortDescription() != null)
                existingGame.setShortDescription(updatedGameDetails.getShortDescription());
            if (updatedGameDetails.getLongDescription() != null)
                existingGame.setLongDescription(updatedGameDetails.getLongDescription());
            if (updatedGameDetails.getPublished() != null)
                existingGame.setPublished(updatedGameDetails.getPublished());
            if (updatedGameDetails.getMaxPlayers() != null)
                existingGame.setMaxPlayers(updatedGameDetails.getMaxPlayers());
            if (updatedGameDetails.getAge() != null)
                existingGame.setAge(updatedGameDetails.getAge());
            if (updatedGameDetails.getPrice() != null)
                existingGame.setPrice(updatedGameDetails.getPrice());

            return gameRepository.save(existingGame);
        } else {
            return null;
        }
    }*/
    public ResponseEntity<String> deleteGameById(Long id) {
        gameRepository.deleteById(id);
        return null;
    }

    public Game incrementLikes(Long id) {
        Game game = gameRepository.findById(id).orElse(null);

        if (game != null) {
            game.setLikes((game.getLikes() != null ? game.getLikes() : 0) + 1);
            return gameRepository.save(game);
        }
        return null;
    }
    public Game decrementLikes(Long id) {
        Game game = gameRepository.findById(id).orElse(null);

        if (game != null) {
            int likes = (game.getLikes() != null ? game.getLikes() : 0);
            game.setLikes(likes > 0 ? likes - 1 : 0);
            return gameRepository.save(game);
        }
        return null;
    }
    public Game findGameById(Long id) {
        return gameRepository.findById(id).orElse(null);
    }
}
