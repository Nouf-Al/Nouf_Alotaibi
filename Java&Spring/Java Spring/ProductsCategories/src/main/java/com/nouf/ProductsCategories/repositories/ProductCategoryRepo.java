package com.nouf.ProductsCategories.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.nouf.ProductsCategories.models.ProductCategory;
@Repository
public interface ProductCategoryRepo extends CrudRepository<ProductCategory,Long> {
	
}
