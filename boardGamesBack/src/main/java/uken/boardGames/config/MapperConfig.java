package uken.boardGames.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import uken.boardGames.mapper.UserMapper;

@Configuration
public class MapperConfig {

    @Bean
    public UserMapper userMapper() {
        return UserMapper.INSTANCE;
    }
}

