package co.yedam.board.web;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;
import co.yedam.common.Command;

public class ModifyBoardcontrol implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse res) {
		String bno = req.getParameter("bno");
		String title = req.getParameter("title");
		String writer = req.getParameter("writer");
		String content = req.getParameter("content");
		String image = req.getParameter("image");
		
		BoardVO vo = new BoardVO();
		vo.setBoardNo(Integer.parseInt(bno));
		vo.setTitle(title);
		vo.setContent(content);
		vo.setWriter(writer);
		vo.setImage(image);
		
		System.out.println("titile"+title);
		System.out.println("writer"+writer);
		System.out.println("bno"+bno);
	
		BoardService svc = new BoardServiceImpl();
		if(svc.editBoard(vo)) {
			try {
				res.sendRedirect("boardList.do");
			} catch (IOException e) {
				e.printStackTrace();
			}
		}else {
			try {
				res.sendRedirect("modifyForm.do");
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

}
