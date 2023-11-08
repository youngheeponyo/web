package co.yedam.reply.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import co.yedam.reply.service.ReplyVO;

//dao, mapper : select,update,delete와 같은 용어를 사용하는 것이 좋음
public interface ReplyMapper {
	public List<ReplyVO> replyList(@Param("boardNo")int boardNo, @Param("page")int page);	//전체조회
	public ReplyVO selectReply(int replyNo);	//단건 조회
	public int insertReply(ReplyVO vo);	//추가
	public int updateReply(ReplyVO vo);	//수정
	public int deleteReply(int ReplyNo);	//삭제
	
	public int getTotalCnt(int boardNo);
	public List<Map<String,Object>> getReplyCountPerWriter(); 
}
