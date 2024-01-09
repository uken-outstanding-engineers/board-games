package uken.boardGames.key;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.*;

import java.io.Serializable;

@Embeddable
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class LikedGameKey implements Serializable {
    @Column(name = "user_id")
    Long userId;
    @Column(name = "game_id")
    Long gameId;
}
