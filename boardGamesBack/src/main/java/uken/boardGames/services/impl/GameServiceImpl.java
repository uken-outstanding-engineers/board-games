package uken.boardGames.services.impl;
import lombok.RequiredArgsConstructor;
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
}
