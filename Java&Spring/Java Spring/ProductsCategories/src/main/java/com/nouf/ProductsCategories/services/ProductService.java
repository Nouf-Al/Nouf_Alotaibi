package com.nouf.ProductsCategories.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nouf.ProductsCategories.models.Category;
import com.nouf.ProductsCategories.models.Product;
import com.nouf.ProductsCategories.models.ProductCategory;
import com.nouf.ProductsCategories.repositories.ProductCategoryRepo;
import com.nouf.ProductsCategories.repositories.ProductRepo;

@Service
public class ProductService {
	private ProductRepo proRepo;
	private ProductCategoryRepo proCatRepo;
	public ProductService( ProductRepo proRepo,ProductCategoryRepo proCatRepo ) {
		this.proRepo=proRepo;
		this.proCatRepo=proCatRepo;
	}
	
	
	public Product create(Product p1) {
		return proRepo.save(p1);
	}
	
	public Product findOne(Long id) {
		return proRepo.findById(id).orElse(null);
	}
	
	public List<Product> getAll() {
		return (List<Product>) proRepo.findAll();
	}
	
	public void addProdToCategory(ProductCategory proCat) {
		proCatRepo.save(proCat);
	}
	
	public List<Product> availableProductsForCategory(Category category) {
		return proRepo.findByCategoriesNotContains(category);
	}
}
