package uken.boardGames.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uken.boardGames.model.Comment;
import uken.boardGames.services.CommentService;

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

    @PostMapping("/add")
    public ResponseEntity<Comment> addComment(@RequestBody Comment comment) {
        try {
            Comment addedComment = commentService.addComment(comment);
            return new ResponseEntity<>(addedComment, HttpStatus.CREATED);
        } catch (Exception e) {
            // Logowanie błędu lub wyświetlenie komunikatu w konsoli
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
