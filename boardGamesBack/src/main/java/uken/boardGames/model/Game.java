package uken.boardGames.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.Set;

@Entity
@Table(name = "games")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "title")
    private String title;
    @Column(name = "short_description")
    private String shortDescription;
    @Column(name = "published")
    private Integer published;
    @Column(name = "likes")
    private Integer likes;
    @Column(name = "price")
    private Double price;
    @Column(name = "reference")
    private String reference;
    @Column(name = "long_description")
    private String longDescription;
    @Column(name = "max_players")
    private Integer maxPlayers;
    @Column(name = "img")
    private String img;
    @Column(name = "age")
    private Integer age;
    @Column(name = "gametype1")
    private Integer gametype1;
    @Column(name = "gametype2")
    private Integer gametype2;
    @Column(name = "gametype3")
    private Integer gametype3;

    @JsonIgnore
    @OneToMany(mappedBy = "game")
    List<LikedGame> likedGame;
    @JsonIgnore
    @OneToMany(mappedBy = "game")
    List<Comment> comment;

    public Long getId() {
        return id;
    }
    public String getTitle() { return title;}
    public void setTitle(String title) { this.title = title;}
    public String getShortDescription() {return shortDescription;}
    public void setShortDescription(String shortDescription) {this.shortDescription = shortDescription;}
    public String getLongDescription() {return longDescription;}
    public void setLongDescription(String longDescription) {this.longDescription = longDescription;}
    public Integer getPublished() { return published;}
    public void setPublished(Integer published) { this.published = published;}
    public Integer getMaxPlayers() { return maxPlayers;}
    public void setMaxPlayers(Integer maxPlayers) { this.maxPlayers = maxPlayers;}
    public Integer getAge() { return age;}
    public void setAge(Integer age) { this.age = age;}
    public Double getPrice() { return price;}
    public void setPrice(Double price) { this.price = price;}
    public void setLikes(Integer likes) { this.likes = likes;}
    public Integer getLikes() { return likes;}
    public void setImg(String img) { this.img = img;}
    public String getImg() { return img;}
    public List<Comment> getComment() {return comment;}
    public void setComment(List<Comment> comment) {this.comment = comment;}
    public void setGametype1(Integer gametype1) { this.gametype1 = gametype1;}
    public Integer getGametype1() { return gametype1;}
}

