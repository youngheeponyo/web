package co.yedam.board.web;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;
import co.yedam.common.Command;

public class AddBoardControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse res) {
		BoardVO vo = new BoardVO();

		if (req.getMethod().equals("GET")) {
			// 제목, 내용, 작성자 불러오기
			String title = req.getParameter("title");
			String writer = req.getParameter("writer");
			String content = req.getParameter("content");

			vo.setTitle(title);
			vo.setWriter(writer);
			vo.setContent(content);
		} else if (req.getMethod().equals("POST")) {
			String saveDir = req.getServletContext().getRealPath("images");
			int size = 10 * 2048 * 2048;
			// mulripartRequest mr 을 하면 쉽게 파일이 업로드가 됨(라이브러리에 cos 추가)
			try {
				MultipartRequest mr = new MultipartRequest(req, // 요청정보
						saveDir, // 저장경로
						size, // 최대 업로드 크기
						"UTF-8", // 인코딩방식
						new DefaultFileRenamePolicy());// 리네임 정책
				String title = mr.getParameter("title");
				String writer = mr.getParameter("writer");
				String content = mr.getParameter("content");
				String img = mr.getFilesystemName("image");
				vo.setTitle(title);
				vo.setWriter(writer);
				vo.setContent(content);
				vo.setImage(img);
			} catch (IOException e) {
				e.printStackTrace();
			}
		} // end of if

		BoardService svc = new BoardServiceImpl();
		if (svc.addBoard(vo)) {
			try {
				res.sendRedirect("boardList.do");
			} catch (IOException e) {
				e.printStackTrace();
			}
		} else {
			try {
				res.sendRedirect("boardForm.do");
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

	}// end of excute
}
