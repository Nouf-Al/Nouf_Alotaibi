package com.nouf.ProductsCategories.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nouf.ProductsCategories.models.ProductCategory;
import com.nouf.ProductsCategories.repositories.ProductCategoryRepo;

@Service
public class ProductCategoryService {
	private ProductCategoryRepo proCatRepo;
	public ProductCategoryService( ProductCategoryRepo proCatRepo ) {
		this.proCatRepo=proCatRepo;
	}
	
	public ProductCategory create(ProductCategory c1) {
		return proCatRepo.save(c1);
	}
	
	public ProductCategory findOne(Long id) {
		return proCatRepo.findById(id).orElse(null);
	}
	
	public List<ProductCategory> getAll() {
		return (List<ProductCategory>) proCatRepo.findAll();
	}
	
	public void addCatToProduct(ProductCategory catPro) {
		proCatRepo.save(catPro);
	}
	
	public void addProdToCategory(ProductCategory catPro) {
		proCatRepo.save(catPro);
	}
}
