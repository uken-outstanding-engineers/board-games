package uken.boardGames.mapper;

import javax.annotation.processing.Generated;
import uken.boardGames.dto.GameDTO;
import uken.boardGames.dto.LikedGameDTO;
import uken.boardGames.model.Game;
import uken.boardGames.model.LikedGame;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-01-14T19:20:30+0100",
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
}
