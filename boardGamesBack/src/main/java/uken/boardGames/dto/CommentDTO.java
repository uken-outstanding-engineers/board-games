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
public class CommentDTO {
    private CommentKeyDTO id;
    private UserDTO user;
    private GameDTO game;
    private String comment;

    public UserDTO getUser() {return user;}
    public void setUser(UserDTO user) {this.user = user;}
    public GameDTO getGame() {return game;}
    public void setGame(GameDTO game) {this.game = game;}

    public String getComment() {return comment;}
    public void setComment(String comment) {this.comment = comment;}
}
