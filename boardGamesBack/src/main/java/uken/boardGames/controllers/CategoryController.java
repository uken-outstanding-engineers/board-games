package uken.boardGames.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uken.boardGames.model.Category;
import uken.boardGames.model.Game;
import uken.boardGames.services.CategoryService;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/category")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;
    @GetMapping("/all")
    public List<Category> getAllCategory() {
        return categoryService.getCategory();
    }
    @PostMapping("/add")
    public Category addCategory(@RequestBody Category category) { return categoryService.saveCategory(category); }

    @PutMapping("/edit/{id}")
    public Category editCategory(@PathVariable Long id, @RequestBody Category categoryDetails) {
        Category existingCategory = categoryService.findCategoryById(id);

        if (existingCategory != null) {
            existingCategory.setType(categoryDetails.getType());
            return categoryService.saveCategory(existingCategory);
        } else {
            return null;
        }
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable Long id) {
        return categoryService.deleteCategoryById(id);
    }
}
