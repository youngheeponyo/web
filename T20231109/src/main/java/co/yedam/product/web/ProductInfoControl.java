package co.yedam.product.web;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Command;
import co.yedam.product.service.ProductService;
import co.yedam.product.service.ProductVO;
import co.yedam.product.serviceImpl.ProductServiceImpl;

public class ProductInfoControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse res) {
		String path = "product/productInfo.tiles";
		
		String code = req.getParameter("code");
		ProductService svc = new ProductServiceImpl();
		ProductVO vo = svc.select(code);
		req.setAttribute("code", vo);
		
		List<ProductVO> list = svc.list();
		req.setAttribute("list", list);
		try {
			req.getRequestDispatcher(path).forward(req, res);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
