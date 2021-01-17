package com.nouf.ProductsCategories.controllers;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nouf.ProductsCategories.models.Category;
import com.nouf.ProductsCategories.models.Product;
import com.nouf.ProductsCategories.models.ProductCategory;
import com.nouf.ProductsCategories.services.CategoryService;
import com.nouf.ProductsCategories.services.ProductCategoryService;
import com.nouf.ProductsCategories.services.ProductService;

@Controller
public class HomeController {
	
	private ProductService proSer;
	private CategoryService catSer;
	private ProductCategoryService proCatSer;
	
	public HomeController(ProductService proSer,CategoryService catSer,ProductCategoryService proCatSer) {
		this.catSer = catSer;
		this.proSer = proSer;
		this.proCatSer=proCatSer;
				
	}
	
	@RequestMapping("/category/new")
	public String newCategory() {
		return "newCategory.jsp";
	}
	
	@RequestMapping("/product/new")
	public String newProduct() {
		return "newProduct.jsp";
	}
	
	@RequestMapping("/product/{id}")
	public String showProduct(Model model,@PathVariable(name="id") Long id) {
		
		Product p1 = proSer.findOne(id);
		model.addAttribute("product", p1);
		
		List<Category> c1 = catSer.availableCategoriesForProduct(p1);
		model.addAttribute("categories", c1);
		return "showProducts.jsp";
	}
	
	@RequestMapping("/category/{id}")
	public String showCategory(Model model,@PathVariable(name="id") Long id) {
		
		Category c1 = catSer.findOne(id);
		model.addAttribute("category", c1);
		
		List<Product> p1 = proSer.availableProductsForCategory(c1);
		model.addAttribute("products", p1);
		return "showCategories.jsp";
	}
	
	
	@RequestMapping(value="/category/create", method=RequestMethod.POST)
	public String createCategory(@ModelAttribute("category") Category category) {
		catSer.create(category);
		return "redirect:/category/new";
	}
	
	@RequestMapping(value="/product/create", method=RequestMethod.POST)
	public String createProduct(@ModelAttribute("product") Product product) {
		proSer.create(product);
		return "redirect:/product/new";
	}
	
	@RequestMapping(value="/product/add", method=RequestMethod.POST)
	public String addCatToPro(@ModelAttribute("CatforPro") ProductCategory CatforPro) {
		catSer.addCatToProduct(CatforPro);
		return "redirect:/product/" + CatforPro.getProduct().getId();
	}
	
	@RequestMapping(value="/category/add", method=RequestMethod.POST)
	public String addProtoCat(@ModelAttribute("ProForCat") ProductCategory ProForCat) {
		proSer.addProdToCategory(ProForCat);
		return "redirect:/category/" + ProForCat.getCategory().getId();
	}
}
