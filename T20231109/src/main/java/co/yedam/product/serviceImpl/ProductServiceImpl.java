package co.yedam.product.serviceImpl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.DataSourceMybatis;
import co.yedam.product.mapper.ProductMapper;
import co.yedam.product.service.ProductService;
import co.yedam.product.service.ProductVO;

public class ProductServiceImpl implements ProductService{
	
	SqlSession sqlSession = DataSourceMybatis.getInstance().openSession(true);
	ProductMapper mapper = sqlSession.getMapper(ProductMapper.class);
	@Override
	public List<ProductVO> list() {
		return mapper.selectList();
	}
	
	@Override
	public ProductVO select(String ProdCode) {
		return mapper.select(ProdCode);
	}
}
