package co.yedam.board.web;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;
import co.yedam.common.Command;

public class RemoveControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse res) {
		String bno = req.getParameter("bno");
		BoardService svc = new BoardServiceImpl();
		BoardVO vo = svc.getBoard(Integer.parseInt(bno));
		req.setAttribute("vo", vo);
		
		try {
			req.getRequestDispatcher("board/removeForm.tiles").forward(req, res);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
