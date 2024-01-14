package uken.boardGames.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import uken.boardGames.key.CommentKey;
import uken.boardGames.key.LikedGameKey;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "comments")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Comment {
    @EmbeddedId
    @JsonIgnore
    CommentKey id;

    @ManyToOne
    @MapsId("idUsers")
    @JoinColumn(name = "id_users")
    User user;

    @ManyToOne
    @MapsId("idGames")
    @JoinColumn(name = "id_games")
    Game game;
    @Column(name = "comment")
    private String comment;

    public CommentKey getId() { return id;}
    public void setId(CommentKey id) {
        this.id = id;
    }
    public Long getUserId() { return user.getId();}
    public void setUserId(Long userId) { this.setUserId(userId);}
    public Long getGameId() { return game.getId();}
    public void setGameId(Long gameId) { this.setGameId(gameId);}
    public String getComment() { return comment;}
    public void setComment(String comment) { this.comment = comment;}
    public User getUser() { return user;}
    public Game getGame() {return game;}
}