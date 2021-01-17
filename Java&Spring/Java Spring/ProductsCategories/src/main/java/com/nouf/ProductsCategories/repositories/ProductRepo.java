package com.nouf.ProductsCategories.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.nouf.ProductsCategories.models.Category;
import com.nouf.ProductsCategories.models.Product;

@Repository
public interface ProductRepo extends CrudRepository<Product,Long>{
	List<Product> findByCategoriesNotContains(Category category);

}
