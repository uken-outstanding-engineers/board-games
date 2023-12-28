package uken.boardGames.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
    private String short_description;
    @Column(name = "published")
    private Integer published;
    @Column(name = "likes")
    private Integer likes;
    @Column(name = "price")
    private Double price;
    @Column(name = "reference")
    private String reference;
    @Column(name = "long_description")
    private String long_description;
    @Column(name = "max_players")
    private Integer max_players;
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

    public Long getId() {
        return id;
    }
    public String getTitle() { return title;}
    public void setTitle(String title) { this.title = title;}
}
