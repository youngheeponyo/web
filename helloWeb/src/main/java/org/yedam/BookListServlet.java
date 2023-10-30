package org.yedam;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.yedam.serivce.Impl.BookServiceImpl;
import org.yedam.service.BookService;
import org.yedam.service.BookVO;

@WebServlet("/BookListServlet")
public class BookListServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public BookListServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		BookService bs = new BookServiceImpl();
		List<BookVO> list = bs.booklist();
		response.setContentType("text/xml;charset=utf-8");
		PrintWriter out = response.getWriter();
		String str = "[";
		int count = 0;
		for(BookVO vo:list) {
			str += "{";
			str += "\"book_code\":\""+vo.getBook_code()+"\",";
			str += "\"book_title\":\""+vo.getBook_title()+"\",";
			str += "\"book_author\":\""+vo.getBook_author()+"\",";
			str += "\"book_press\":\""+vo.getBook_press()+"\",";
			str += "<book_price\":\""+vo.getBook_price()+"\"";
			str += "}";
			if(++count != list.size()) {
				str += ",";
			}
		}
		str += "]";
		out.print(str);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
