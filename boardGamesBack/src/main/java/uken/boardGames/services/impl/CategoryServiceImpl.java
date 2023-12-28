package uken.boardGames.services.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import uken.boardGames.model.Category;
import uken.boardGames.model.Game;
import uken.boardGames.repository.CategoryRepository;
import uken.boardGames.services.CategoryService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {
    private final CategoryRepository categoryRepository;

    @Override
    public List<Category> getCategory() { return categoryRepository.findAll(); }
    public Category saveCategory(Category category) {return categoryRepository.save(category);}
    public Category editCategory(Long id, Category updatedCategoryDetails) {
        Category existingCategory = categoryRepository.findById(id).orElse(null);

        if (existingCategory != null) {
            existingCategory.setType(updatedCategoryDetails.getType());

            return categoryRepository.save(existingCategory);
        } else {
            return null;
        }
    }
    public ResponseEntity<String> deleteCategoryById(Long id) {
        categoryRepository.deleteById(id);
        return null;
    }
    public Category findCategoryById(Long id) {
        return categoryRepository.findById(id).orElse(null);
    }
}
