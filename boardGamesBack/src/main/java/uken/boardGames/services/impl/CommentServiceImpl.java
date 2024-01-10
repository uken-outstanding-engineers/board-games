package uken.boardGames.services.impl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import uken.boardGames.repository.CommentRepository;
import uken.boardGames.services.CommentService;
import uken.boardGames.model.Comment;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentServiceImpl implements CommentService {
    private final CommentRepository commentRepository;
    @Override
    public List<Comment> getComments() {
        return commentRepository.findAll();
    }

    public Comment addComment(Comment comment) {
        return commentRepository.save(comment);
    }
}
