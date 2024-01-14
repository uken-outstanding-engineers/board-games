package uken.boardGames.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LikedGameKeyDTO implements Serializable {
    private Long userId;
    private Long gameId;
}
