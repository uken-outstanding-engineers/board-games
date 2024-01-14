package uken.boardGames.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.factory.Mappers;
import uken.boardGames.dto.CommentDTO;
import uken.boardGames.dto.LikedGameDTO;
import uken.boardGames.model.Comment;
import uken.boardGames.model.LikedGame;

import java.util.List;

@Mapper
public interface CommentMapper {
    @Mappings({
            @Mapping(target = "user", ignore = true),

    })
    CommentDTO commentToCommentDTO(Comment comment);

}
