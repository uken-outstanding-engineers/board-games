package uken.boardGames.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import uken.boardGames.dto.GameDTO;
import uken.boardGames.dto.LikedGameDTO;
import uken.boardGames.dto.LikedGameKeyDTO;
import uken.boardGames.dto.UserDTO;
import uken.boardGames.key.LikedGameKey;
import uken.boardGames.model.LikedGame;

@Mapper
public interface LikedGameMapper {
    @Mappings({
            @Mapping(target = "user", ignore = true),

    })

    LikedGameDTO likedGameToLikedGameDTO(LikedGame likedGame);
}

