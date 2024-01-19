package uken.boardGames.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import uken.boardGames.dto.CommentDTO;
import uken.boardGames.dto.GameDTO;
import uken.boardGames.dto.UserDTO;
import uken.boardGames.model.Comment;
import uken.boardGames.model.Game;
import uken.boardGames.model.User;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-01-19T02:05:15+0100",
    comments = "version: 1.5.5.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-8.5.jar, environment: Java 17.0.6 (BellSoft)"
)
public class GameMapperImpl implements GameMapper {

    @Override
    public UserDTO userToUserDTO(User user) {
        if ( user == null ) {
            return null;
        }

        UserDTO userDTO = new UserDTO();

        userDTO.setId( user.getId() );
        userDTO.setUsername( user.getUsername() );
        userDTO.setPermission( user.getPermission() );
        userDTO.setEmail( user.getEmail() );
        userDTO.setDescription( user.getDescription() );

        return userDTO;
    }

    @Override
    public GameDTO gameToGameDTO(Game game) {
        if ( game == null ) {
            return null;
        }

        GameDTO gameDTO = new GameDTO();

        gameDTO.setId( game.getId() );
        gameDTO.setTitle( game.getTitle() );
        gameDTO.setLikes( game.getLikes() );
        gameDTO.setShortDescription( game.getShortDescription() );
        gameDTO.setImg( game.getImg() );

        return gameDTO;
    }

    @Override
    public List<CommentDTO> commentToCommentDTO(List<Comment> comment) {
        if ( comment == null ) {
            return null;
        }

        List<CommentDTO> list = new ArrayList<CommentDTO>( comment.size() );
        for ( Comment comment1 : comment ) {
            list.add( commentToCommentDTO1( comment1 ) );
        }

        return list;
    }

    protected CommentDTO commentToCommentDTO1(Comment comment) {
        if ( comment == null ) {
            return null;
        }

        CommentDTO commentDTO = new CommentDTO();

        commentDTO.setUser( userToUserDTO( comment.getUser() ) );
        commentDTO.setGame( gameToGameDTO( comment.getGame() ) );
        commentDTO.setComment( comment.getComment() );

        return commentDTO;
    }
}
