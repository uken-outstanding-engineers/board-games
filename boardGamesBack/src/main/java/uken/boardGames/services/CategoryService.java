package uken.boardGames.services;

import org.springframework.http.ResponseEntity;
import uken.boardGames.model.Category;
import uken.boardGames.model.Game;

import java.util.List;

public interface CategoryService {
    List<Category> getCategory();
    Category saveCategory(Category category);
    ResponseEntity<String> deleteCategoryById(Long id);
    Category editCategory(Long id, Category categoryDetails);

    Category findCategoryById(Long id);
}
