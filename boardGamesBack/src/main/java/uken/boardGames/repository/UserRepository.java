package uken.boardGames.repository;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import uken.boardGames.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);

    @Transactional
    @Modifying
    @Query("DELETE FROM LikedGame lg WHERE lg.user.id = :userId AND lg.game.id = :gameId")
    void deleteLikedGameByUserIdAndGameId(@Param("userId") Long userId, @Param("gameId") Long gameId);
}
