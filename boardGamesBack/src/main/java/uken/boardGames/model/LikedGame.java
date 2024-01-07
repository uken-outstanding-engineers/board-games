package uken.boardGames.model;

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
    @MapsId("userId2")
    @JoinColumn(name = "user_id")
    @JsonIgnore
    User user;
    @ManyToOne
    @MapsId("gameId")
    @JoinColumn(name = "game_id")
    @JsonIgnoreProperties("likedGame")
    Game game;
    @Column(name = "date")
    private Date date;
}
