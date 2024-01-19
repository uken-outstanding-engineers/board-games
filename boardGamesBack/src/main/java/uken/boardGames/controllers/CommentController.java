package uken.boardGames.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uken.boardGames.key.CommentKey;
import uken.boardGames.model.Comment;
import uken.boardGames.model.Game;
import uken.boardGames.model.User;
import uken.boardGames.services.CommentService;
import uken.boardGames.services.GameService;
import uken.boardGames.services.UserService;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/comment")
public class CommentController {
    @Autowired
    private CommentService commentService;

    @GetMapping("/all")
    public List<Comment> getAllComments() {
        return commentService.getComments();
    }

    @GetMapping("/game/{gameId}")
    public List<Comment> getCommentsByGameId(@PathVariable Long gameId) {
        return commentService.getCommentsByGameId(gameId);
    }

    @PostMapping("/add")
    public void addComment(@RequestBody Comment comment) {
        System.out.println(comment.getIdGames());
        System.out.println(comment.getIdUsers());
        System.out.println(comment.getComment());
        //commentService.addComment(comment);
    }
}
