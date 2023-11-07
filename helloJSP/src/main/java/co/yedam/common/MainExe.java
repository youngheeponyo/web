package co.yedam.common;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.reply.mapper.ReplyMapper;
import co.yedam.reply.service.ReplyVO;

public class MainExe {
	public static void main(String[] args) {
		
		SqlSession session = DataSourceMybatis.getInstance().openSession(true);
		ReplyMapper mapper = session.getMapper(ReplyMapper.class);
		
		List<ReplyVO> list = mapper.replyList(1);
		list.forEach(vo->System.out.println("전체조회 = "+vo));
		
		System.out.println("단건조회 = "+mapper.selectReply(3));
		
//		ReplyVO vo = new ReplyVO();
//		vo.setBoardNo(1);
//		vo.setReply("새로 만든 내용");
//		vo.setReplyer("새로운 유저");
//		System.out.println("추가="+mapper.insertReply(vo));
		
//		System.out.print("삭제="+mapper.deleteReply(7));
		
		
	}
}
