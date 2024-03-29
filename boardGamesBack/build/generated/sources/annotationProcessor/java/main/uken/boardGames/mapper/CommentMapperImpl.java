package uken.boardGames.mapper;

import javax.annotation.processing.Generated;
import uken.boardGames.dto.CommentDTO;
import uken.boardGames.dto.CommentKeyDTO;
import uken.boardGames.dto.GameDTO;
import uken.boardGames.key.CommentKey;
import uken.boardGames.model.Comment;
import uken.boardGames.model.Game;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-01-19T15:10:49+0100",
    comments = "version: 1.5.5.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-8.5.jar, environment: Java 17.0.6 (BellSoft)"
)
public class CommentMapperImpl implements CommentMapper {

    @Override
    public CommentDTO commentToCommentDTO(Comment comment) {
        if ( comment == null ) {
            return null;
        }

        CommentDTO commentDTO = new CommentDTO();

        commentDTO.setGame( gameToGameDTO( comment.getGame() ) );
        commentDTO.setComment( comment.getComment() );
        commentDTO.setId( commentKeyToCommentKeyDTO( comment.getId() ) );

        return commentDTO;
    }

    protected GameDTO gameToGameDTO(Game game) {
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

    protected CommentKeyDTO commentKeyToCommentKeyDTO(CommentKey commentKey) {
        if ( commentKey == null ) {
            return null;
        }

        CommentKeyDTO commentKeyDTO = new CommentKeyDTO();

        commentKeyDTO.setIdUsers( commentKey.getIdUsers() );
        commentKeyDTO.setIdGames( commentKey.getIdGames() );

        return commentKeyDTO;
    }
}
