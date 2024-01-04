package uken.boardGames.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import uken.boardGames.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUserid(String userid);
}
