package uken.boardGames.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import uken.boardGames.dto.GameDTO;
import uken.boardGames.dto.LikedGameDTO;
import uken.boardGames.dto.UserDTO;
import uken.boardGames.model.Game;
import uken.boardGames.model.LikedGame;
import uken.boardGames.model.User;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-01-14T19:20:30+0100",
    comments = "version: 1.5.5.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-8.5.jar, environment: Java 17.0.6 (BellSoft)"
)
public class UserMapperImpl implements UserMapper {

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
    public List<LikedGameDTO> likedGamesToLikedGameDTO(List<LikedGame> likedGames) {
        if ( likedGames == null ) {
            return null;
        }

        List<LikedGameDTO> list = new ArrayList<LikedGameDTO>( likedGames.size() );
        for ( LikedGame likedGame : likedGames ) {
            list.add( likedGameToLikedGameDTO( likedGame ) );
        }

        return list;
    }

    protected LikedGameDTO likedGameToLikedGameDTO(LikedGame likedGame) {
        if ( likedGame == null ) {
            return null;
        }

        LikedGameDTO likedGameDTO = new LikedGameDTO();

        likedGameDTO.setUser( userToUserDTO( likedGame.getUser() ) );
        likedGameDTO.setGame( gameToGameDTO( likedGame.getGame() ) );
        likedGameDTO.setDate( likedGame.getDate() );

        return likedGameDTO;
    }
}
