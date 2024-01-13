package uken.boardGames.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import uken.boardGames.key.LikedGameKey;
import uken.boardGames.model.LikedGame;

public interface LikedGameRepository extends JpaRepository<LikedGame, LikedGameKey> {

}
