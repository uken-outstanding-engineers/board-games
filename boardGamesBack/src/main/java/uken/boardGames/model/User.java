package uken.boardGames.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
    @Column(name = "userid")
    private String userid;
    @Column(name = "passwd")
    private String passwd;
    @Column(name = "permission")
    private Integer permission;
    @Column(name = "description")
    private String description;
    @Column(name = "phone")
    private String phone;
    @Column(name = "addr")
    private String addr;
    @Column(name = "last_login")
    private String lastLogin;

    public String getUsername() {
        return this.userid;
    }
    public String getPassword() {
        return this.passwd;
    }
}
