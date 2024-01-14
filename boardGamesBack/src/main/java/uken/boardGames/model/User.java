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
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "username")
    private String username;
    @Column(name = "passwd")
    private String passwd;
    @Column(name = "permission")
    private Integer permission;
    @Column(name = "email")
    private String email;
    @Column(name = "description")
    private String description;
    @Column(name = "phone")
    private String phone;
    @Column(name = "addr")
    private String addr;
    @Column(name = "last_login")
    private String lastLogin;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    List<LikedGame> likedGame;
    @JsonIgnore
    @OneToMany(mappedBy = "user")
    List<Comment> comment;

    public Long getId() { return id;}
    public String getUsername() { return username;}
    public void setUsername(String username) { this.username = username;}
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) { this.email = email;}
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) { this.description = description;}
    public String getPasswd() {
        return passwd;
    }
    public void setPasswd(String passwd) { this.passwd = passwd;}
    public Integer getPermission() { return permission;}
    public void setPermission(Integer permission) { this.permission = permission;}
    public String getPhone() { return phone;}
    public String getAddr() { return addr;}
    public void setAddr(String addr) { this.addr = addr;}
    public String getLastLogin() { return lastLogin;}
    public void setLastLogin(String lastLogin) { this.lastLogin = lastLogin;}

    public List<LikedGame> getLikedGame() {
        return likedGame;
    }
    public void setLikedGame(List<LikedGame> likedGame) {
        this.likedGame = likedGame;
    }
    public List<Comment> getComment() {return comment;}
    public void setComment(List<Comment> comment) {this.comment = comment;}
}
