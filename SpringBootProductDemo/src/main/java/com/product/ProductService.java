package com.product;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    // Add product
    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    // Get all products
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // Find by name
    public List<Product> getProductsByName(String name) {
        return productRepository.findByName(name);
    }

    // Delete product
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}
