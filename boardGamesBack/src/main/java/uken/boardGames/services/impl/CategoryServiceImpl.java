package uken.boardGames.services.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import uken.boardGames.model.Category;
import uken.boardGames.repository.CategoryRepository;
import uken.boardGames.services.CategoryService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {
    private final CategoryRepository categoryRepository;

    @Override
    public List<Category> getCategory() { return categoryRepository.findAll(); }

}
