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
public class CommentKey implements Serializable {
    @Column(name = "id_users")
    Long idUsers;
    @Column(name = "id_games")
    Long idGames;
}