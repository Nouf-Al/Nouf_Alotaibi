package com.nouf.ProductsCategories.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nouf.ProductsCategories.models.Category;
import com.nouf.ProductsCategories.models.Product;
import com.nouf.ProductsCategories.models.ProductCategory;
import com.nouf.ProductsCategories.repositories.CategoryRepo;
import com.nouf.ProductsCategories.repositories.ProductCategoryRepo;

@Service
public class CategoryService {
	private CategoryRepo catRepo;
	private ProductCategoryRepo proCatRepo;

	public CategoryService( CategoryRepo catRepo, ProductCategoryRepo proCatRepo  ) {
		this.catRepo=catRepo;
		this.proCatRepo=proCatRepo;

	}

	public Category create(Category c1) {
		return catRepo.save(c1);
	}
	
	public Category findOne(Long id) {
		return catRepo.findById(id).orElse(null);
	}
	
	public List<Category> getAll() {
		return (List<Category>) catRepo.findAll();
	}
	
	public void addCatToProduct(ProductCategory catPro) {
		proCatRepo.save(catPro);
	}
	
	public List<Category> availableCategoriesForProduct(Product product) {
        return catRepo.findByProductsNotContains(product);  
    }
}
