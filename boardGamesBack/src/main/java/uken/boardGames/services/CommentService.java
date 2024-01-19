package uken.boardGames.services;

import uken.boardGames.model.Comment;

import java.util.List;

public interface CommentService {
    List<Comment> getComments();
    List<Comment> getCommentsByGameId(Long gameId);
    void addComment(Comment comment);
    //Comment findGameById(Long id);
}
