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

    public Long getIdUsers() {return idUsers;}
    public Long getIdGames() {return idGames;}
    public void setIdUsers(Long idUsers) {this.idUsers = idUsers;}
    public void setIdGames(Long idGames) {this.idGames = idGames;}
}