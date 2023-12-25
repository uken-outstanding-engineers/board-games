package uken.boardGames.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import uken.boardGames.model.Game;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {
}
