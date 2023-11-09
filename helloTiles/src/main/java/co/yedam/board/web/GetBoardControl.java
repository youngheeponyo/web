package co.yedam.board.web;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;
import co.yedam.common.Command;

public class GetBoardControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse res) {
		String path = "board/getBoard.tiles";
		
		String bno = req.getParameter("bno");
		BoardService svc = new BoardServiceImpl();
		BoardVO vo = svc.getBoard(Integer.parseInt(bno));
		req.setAttribute("bno", vo);
		
		try {
			req.getRequestDispatcher(path).forward(req, res);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}

}
