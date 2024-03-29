package uken.boardGames.mapper;

import javax.annotation.processing.Generated;
import uken.boardGames.dto.GameDTO;
import uken.boardGames.dto.LikedGameDTO;
import uken.boardGames.dto.LikedGameKeyDTO;
import uken.boardGames.key.LikedGameKey;
import uken.boardGames.model.Game;
import uken.boardGames.model.LikedGame;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-01-19T15:10:49+0100",
    comments = "version: 1.5.5.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-8.5.jar, environment: Java 17.0.6 (BellSoft)"
)
public class LikedGameMapperImpl implements LikedGameMapper {

    @Override
    public LikedGameDTO likedGameToLikedGameDTO(LikedGame likedGame) {
        if ( likedGame == null ) {
            return null;
        }

        LikedGameDTO likedGameDTO = new LikedGameDTO();

        likedGameDTO.setGame( gameToGameDTO( likedGame.getGame() ) );
        likedGameDTO.setDate( likedGame.getDate() );
        likedGameDTO.setId( likedGameKeyToLikedGameKeyDTO( likedGame.getId() ) );

        return likedGameDTO;
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

    protected LikedGameKeyDTO likedGameKeyToLikedGameKeyDTO(LikedGameKey likedGameKey) {
        if ( likedGameKey == null ) {
            return null;
        }

        LikedGameKeyDTO likedGameKeyDTO = new LikedGameKeyDTO();

        likedGameKeyDTO.setUserId( likedGameKey.getUserId() );
        likedGameKeyDTO.setGameId( likedGameKey.getGameId() );

        return likedGameKeyDTO;
    }
}
