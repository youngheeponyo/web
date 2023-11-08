package co.yedam.common;

public class PageDTO {
	int total;	//전체 댓글 갯수
	int currentPage;	//현재페이지
	int startPage, endPage;	//첫페이지, 마지막페이지
	boolean next, prev; 	//이전페이지, 이후페이지 존재여부
	int boardNo;	//어떤 글에 대한 정보인지
	
	public PageDTO(int boardNo, int total, int currentPage) {
		int realEnd = (int)Math.ceil(total/5.0);
		
		this.boardNo = boardNo;
		this.total = total;
		this.currentPage = currentPage;
	
		this.endPage = (int)Math.ceil(currentPage/10.0) * 10;
		this.startPage = this.endPage - 9;
		
		this.endPage = this.endPage > realEnd ? realEnd : this.endPage;
		this.startPage = this.startPage < 1 ? 1 : this.startPage;
		
		this.prev = this.startPage > 1;
		this.next = this.endPage < realEnd;
	}
	
	
}
