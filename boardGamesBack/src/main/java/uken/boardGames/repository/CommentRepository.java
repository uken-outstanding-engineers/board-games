package uken.boardGames.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import uken.boardGames.model.Comment;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

    @Query("SELECT c FROM Comment c WHERE c.id.idGames = :gameId")
    List<Comment> findByGameId(@Param("gameId") Long gameId);

    @Query("SELECT c FROM Comment c WHERE c.id.idUsers = :userId")
    List<Comment> findByUserId(@Param("userId") Long userId);
}
