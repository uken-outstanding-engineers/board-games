package uken.boardGames.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class GameDTO {
    private Long id;
    private String title;
    private Integer likes;
    private String shortDescription;
    private String img;

    public void setId(Long id) {this.id = id;}
    public void setTitle(String title) {this.title = title;}
    public void setLikes(Integer likes) {this.likes = likes;}
    public void setShortDescription(String shortDescription) {this.shortDescription = shortDescription;}
    public void setImg(String img) {this.img = img;}

}
