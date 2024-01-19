package uken.boardGames.services.impl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import uken.boardGames.key.CommentKey;
import uken.boardGames.key.LikedGameKey;
import uken.boardGames.model.Game;
import uken.boardGames.model.LikedGame;
import uken.boardGames.model.User;
import uken.boardGames.repository.CommentRepository;
import uken.boardGames.repository.GameRepository;
import uken.boardGames.repository.UserRepository;
import uken.boardGames.services.CommentService;
import uken.boardGames.model.Comment;

import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentServiceImpl implements CommentService {
    private final CommentRepository commentRepository;
    private final GameRepository gameRepository;
    private final UserRepository userRepository;
    @Override
    public List<Comment> getComments() {
        return commentRepository.findAll();
    }

    public List<Comment> getCommentsByGameId(Long gameId) {
        // Logika pobierania komentarzy dla konkretnej gry
        return commentRepository.findByGameId(gameId);
    }

    public void addComment(Comment incomingComment) {
        Long userId = incomingComment.getIdUsers();
        Long gameId = incomingComment.getIdGames();
        System.out.println("UserID: " + userId);
        System.out.println("GameID: " + gameId);
        if (userId == null || gameId == null) {
            throw new IllegalArgumentException("User ID or Game ID is null");
        }

        User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("User not found"));
        Game game = gameRepository.findById(gameId).orElseThrow(() -> new IllegalArgumentException("Game not found"));

        CommentKey commentKey = new CommentKey(userId, gameId);

        Comment savedComment = new Comment(commentKey, user, game, incomingComment.getComment());

        commentRepository.save(savedComment);
    }
}
