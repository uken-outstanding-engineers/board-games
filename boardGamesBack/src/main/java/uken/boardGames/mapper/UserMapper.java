package uken.boardGames.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.factory.Mappers;
import org.springframework.stereotype.Component;
import uken.boardGames.dto.GameDTO;
import uken.boardGames.dto.LikedGameDTO;
import uken.boardGames.dto.UserDTO;
import uken.boardGames.model.Game;
import uken.boardGames.model.LikedGame;
import uken.boardGames.model.User;

import java.util.List;
import java.util.stream.Collectors;

@Mapper
@Component
public interface UserMapper {
    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    @Mappings({
            @Mapping(target = "likedGame", ignore = true),
    })
    UserDTO userToUserDTO(User user);
    GameDTO gameToGameDTO(Game game);

    List<LikedGameDTO> likedGamesToLikedGameDTO(List<LikedGame> likedGames);
}
