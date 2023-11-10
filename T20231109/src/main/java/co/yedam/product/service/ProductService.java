package co.yedam.product.service;

import java.util.List;

public interface ProductService {
	public List<ProductVO> list();
	public ProductVO select(String ProdCode);
}
