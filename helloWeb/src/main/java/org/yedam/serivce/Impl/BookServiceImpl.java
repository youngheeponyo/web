package org.yedam.serivce.Impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.yedam.common.DataSource;
import org.yedam.service.BookService;
import org.yedam.service.BookVO;

public class BookServiceImpl implements BookService{
	
	private DataSource dao = DataSource.getInstance();
	private Connection conn;
	private PreparedStatement psmt;
	
	@Override
	public List<BookVO> booklist() {
		List<BookVO> list = new ArrayList<>();
		BookVO vo;
		String sql = "SELECT * FROM BOOK";
		try {
			conn = dao.getConnection();
			psmt = conn.prepareStatement(sql);
			ResultSet rs = psmt.executeQuery();
			while(rs.next()) {
				vo = new BookVO();
				vo.setBook_code(rs.getString("book_code"));
				vo.setBook_title(rs.getString("book_title"));
				vo.setBook_author(rs.getString("book_author"));
				vo.setBook_press(rs.getString("book_press"));
				vo.setBook_price(rs.getInt("book_price"));
				list.add(vo);
			}
			rs.close();
		}catch(SQLException e) {
			e.printStackTrace();
		}finally {
			try {
				if(psmt != null)psmt.close();
				if(conn != null)conn.close();
			}catch(SQLException e) {
				e.printStackTrace();
			}
		}
		return list;
	}
}
