package co.yedam.board.serviceImpl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.board.mapper.BoardMapper;
import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.service.MemberVO;
import co.yedam.common.DataSourceMybatis;

public class BoardServiceImpl implements BoardService {
	BoardDAO dao = new BoardDAO();
	
	SqlSession sqlSession = DataSourceMybatis.getInstance().openSession(true);	//true를 넣어주면 자동 commit이 됨
	
	BoardMapper mapper = sqlSession.getMapper(BoardMapper.class);
	
	@Override
	public List<BoardVO> boradList() {
		return mapper.selectList();
		//return dao.selectList();
	}

	@Override
	public BoardVO getBoard(int boardNo) {
		mapper.updateCnt(boardNo);
		return mapper.select(boardNo);
		//dao.updateCnt(boardNo);
		//return dao.select(boardNo);
	}

	@Override
	public boolean addBoard(BoardVO vo) {
		return mapper.insert(vo) == 1;
		//return dao.insert(vo) == 1;
	}

	@Override
	public boolean editBoard(BoardVO vo) {
		return mapper.update(vo) == 1;
		//return dao.update(vo) == 1;
	}

	@Override
	public boolean removeBoard(int boardNo) {
		return mapper.delete(boardNo) == 1;
		//return dao.delete(boardNo) == 1;
	}
	
	@Override
	public MemberVO loginCheck(String id, String pw) {
		return mapper.getUser(id, pw);
		//return dao.getUser(id, pw);
	}
	
	@Override
	public List<MemberVO> memberList() {
		return mapper.member();
		//return dao.member();
	}
}
