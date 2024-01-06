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

    public String getUserid() {return userid;}
    public void setUserid(String userid) { this.userid = userid;}
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
}
