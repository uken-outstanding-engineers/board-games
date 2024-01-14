package uken.boardGames.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

    private Long id;
    private String username;
    private Integer permission;
    private String email;
    private String description;

    private List<LikedGameDTO> likedGame;

    public void setId(Long id) {
        this.id = id;
    }
    public void setUsername(String username) { this.username = username;}
    public void setPermission(Integer permission) {this.permission = permission;}
    public void setEmail(String email) {
        this.email = email;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public void setLikedGame(List<LikedGameDTO> likedGame) {
        this.likedGame = likedGame;
    }
}
