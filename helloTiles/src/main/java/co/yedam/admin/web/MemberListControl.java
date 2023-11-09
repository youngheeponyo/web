package co.yedam.admin.web;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.service.BoardService;
import co.yedam.board.serviceImpl.BoardServiceImpl;
import co.yedam.common.Command;

public class MemberListControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse res) {
		String path = "member/memberList.tiles";
		
		BoardService svc = new BoardServiceImpl();
		List<co.yedam.board.service.MemberVO> list = svc.memberList();
		req.setAttribute("list", list);
		
		try {
			req.getRequestDispatcher(path).forward(req, res);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}

}
