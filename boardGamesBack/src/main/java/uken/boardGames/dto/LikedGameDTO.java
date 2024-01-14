package uken.boardGames.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LikedGameDTO {
    private LikedGameKeyDTO id;
    private UserDTO user;
    private GameDTO game;
    private Date date;

    public UserDTO getUser() {return user;}
    public void setUser(UserDTO user) {this.user = user;}
    public GameDTO getGame() {return game;}
    public void setGame(GameDTO game) {this.game = game;}
    public void setDate(Date date) {
        this.date = date;
    }
}
