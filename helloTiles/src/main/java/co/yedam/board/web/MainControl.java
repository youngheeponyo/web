package co.yedam.board.web;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Command;

public class MainControl implements Command{

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse res) {
		try {
			req.getRequestDispatcher("board/main.tiles").forward(req, res);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
}
