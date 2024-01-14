package uken.boardGames.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.factory.Mappers;
import uken.boardGames.dto.CommentDTO;
import uken.boardGames.dto.GameDTO;
import uken.boardGames.dto.LikedGameDTO;
import uken.boardGames.dto.UserDTO;
import uken.boardGames.model.Comment;
import uken.boardGames.model.Game;
import uken.boardGames.model.LikedGame;
import uken.boardGames.model.User;

import java.util.List;

@Mapper
public interface GameMapper {

    GameMapper INSTANCE = Mappers.getMapper(GameMapper.class);

    @Mappings({
            @Mapping(target = "likedGame", ignore = true),
    })
    UserDTO userToUserDTO(User user);
    GameDTO gameToGameDTO(Game game);

    List<CommentDTO> commentToCommentDTO(List<Comment> comment);
}
