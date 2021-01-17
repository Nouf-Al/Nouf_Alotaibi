package com.nouf.ProductsCategories.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.nouf.ProductsCategories.models.Category;
import com.nouf.ProductsCategories.models.Product;
@Repository
public interface CategoryRepo extends CrudRepository<Category,Long>{
    List<Category> findByProductsNotContains(Product product);

}
