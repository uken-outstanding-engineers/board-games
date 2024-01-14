package uken.boardGames.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import uken.boardGames.key.LikedGameKey;

import java.util.Date;

@Entity
//@Table(name = "liked_game")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LikedGame {
    @EmbeddedId
    @JsonIgnore
    LikedGameKey id;
    @ManyToOne
    @MapsId("userId")
    @JoinColumn(name = "user_id")
    @JsonIgnore
    User user;
    @ManyToOne
    @MapsId("gameId")
    @JoinColumn(name = "game_id")
    @JsonIgnore
    Game game;
    @Column(name = "date")
    private Date date;

    public LikedGameKey getId() { return id;}
    public void setId(LikedGameKey id) {
        this.id = id;
    }
    public Long getUserId() { return this.getUserId();}
    public void setUserId(Long userId) { this.setUserId(userId);}
    public Long getGameId() { return this.getGameId();}
    public void setGameId(Long gameId) { this.setGameId(gameId);}
    public Date getDate() { return date;}
    public void setDate(Date date) { this.date = date;}
    public User getUser() { return user;}
    public Game getGame() {return game;}
}

