package co.yedam.board.web;



import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.common.Command;

public class boardFormControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse res) {
		HttpSession session = req.getSession();
		if(session.getAttribute("logId")==null) {
			try {
				res.sendRedirect("loginForm.do");
			} catch (IOException e) {
				e.printStackTrace();
			}
		}else {
			try {
				req.getRequestDispatcher("board/boardForm.tiles").forward(req, res);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	
		
		
	}

}
