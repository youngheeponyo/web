package co.yedam.board.web;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Command;

public class LogoutControl implements Command{
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		req.getSession().invalidate();
		
		//세션 삭제 후 첫 페이지로 이동
		try {
			resp.sendRedirect("boardList.do");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
