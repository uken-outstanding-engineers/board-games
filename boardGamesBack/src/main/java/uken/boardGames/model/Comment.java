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
    @JsonBackReference
    @ManyToOne
    @MapsId("idUsers")
    @JoinColumn(name = "id_users")
    @JsonIgnoreProperties({"comment", "likedGame"})
    User user;
    @JsonBackReference
    @ManyToOne
    @MapsId("idGames")
    @JoinColumn(name = "id_games")
    @JsonIgnore
    Game game;
    @Column(name = "comment")
    private String comment;
}