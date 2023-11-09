package co.yedam.reply.service;

import java.util.List;
import java.util.Map;

public interface ReplyService {
	public List<ReplyVO> replyList(int boardNo,int page);	//전체조회
	public ReplyVO getReply(int replyNo);	//단건 조회
	public boolean addReply(ReplyVO vo);	//추가
	public boolean editReply(ReplyVO vo);	//수정
	public boolean delReply(int ReplyNo);	//삭제
	
	//댓글 건수
	public int getTotalCnt(int boardNo);
}
