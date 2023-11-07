<%@page import="co.yedam.board.service.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<style>
#list span {
	margin: 4px;
}
</style>
<%@include file="../layout/menu.jsp"%>
<%@include file="../layout/header.jsp"%>
<%
BoardVO vo = (BoardVO) request.getAttribute("bno");
%>
<h3>상세화면</h3>
<form action="modifyForm.do" name="myForm">
	<input type="hidden" name="bno" value="<%=vo.getBoardNo()%>">
	<table class="table">
		<tr>
			<th>글번호</th>
			<td class="boardNo"><%=vo.getBoardNo()%></td>
			<th>작성일시</th>
			<td><%=vo.getWriteDate()%></td>
		</tr>
		<tr>
			<th>글제목</th>
			<td colspan="3"><%=vo.getTitle()%></td>
		</tr>
		<tr>
			<th>내용</th>
			<td colspan="4"><textarea rows="5" cols="40"><%=vo.getContent()%></textarea></td>
		</tr>
		<%
		if (vo.getImage() != null) {
		%>
		<tr>
			<th>이미지</th>
			<td colspan="3"><img width="150px" height="100px"
				src="images/<%=vo.getImage()%>"></td>
		</tr>
		<%
		}
		%>
		<tr>
			<th>작성자</th>
			<td><%=vo.getWriter()%></td>
			<th>조회수</th>
			<td><%=vo.getViewCnt()%></td>
		</tr>
		<%
		if (logId != null && logId.equals(vo.getWriter())) {
		%>
		<tr>
			<td colspan="4"><input type="submit" value="수정"> <input
				type="button" value="삭제"></td>
		</tr>
		<%
		} else if (respon != null && respon.equals("Admin")) {
		%>
		<tr>
			<td colspan="4"><input type="submit" value="수정"> <input
				type="button" value="삭제"></td>
		</tr>
		<%
		} else{
		%>
		<tr>
			<td colspan="4" ><input disabled type="submit" value="수정" > <input disabled type="button" value="삭제" ></td>
		</tr>
		<%} %>
	</table>
</form>

<h4>댓글등록</h4>
<table class="table">
	<tr>
		<th>댓글 내용</th>
		<td><input type="text" id="content"></td>
		<td><button id="addReply">댓글등록</button></td>
	</tr>
</table>

<h4>댓글 목록</h4>
<ul id="list">
	<li id="template" style="display: none;">
		<span>00</span><b>첫번째글</b><span>user01</span><span>2023-10-10</span><button>삭제</button>
	</li>
</ul>

<script>
		document.querySelector('input[type=button]').addEventListener('click', function(e){
			document.forms.myForm.action = "removeBoard.do";
			document.forms.myForm.submit();
		});
		
		//댓글목록
		let bno = "<%=vo.getBoardNo()%>";
		bno = document.querySelector('.boardNo').innerHTML;
		fetch('replyList.do?bno='+ bno)
		.then(resolve=>resolve.json())
		.then(result=>{
			result.forEach(reply => {
				let li = makeRow(reply);
				//ul>li 생성
				document.querySelector('#list').append(li);
			});
		})
		.catch(err=>console.log(err));

		//댓글등록 버튼
		document.querySelector('#addReply').addEventListener('click',function(e){
			let reply = document.querySelector('#content').value;
			let writer = "<%=logId%>";
			if(!bno||!writer||!reply){
				alert('값을 확인하세요');
				return;
			}
			//ajax 호출
			fetch('addReply.do',{
				method:'post',
				headers:{'Content-Type':'application/x-www-form-urlencoded'},
				body:'bno='+bno+'&reply='+reply+'&replyer='+writer
			})
			.then(resolve=>resolve.json())
			.then(result=>{
				if(result.retCode=='OK'){
					document.querySelector('#list').append(makeRow(result.vo));
					document.querySelector('#content').value=' ';
				}else{
					alert('Error');
				}

			})
		})


		function makeRow(reply){
			let temp = document.querySelector('#template').cloneNode(true);
			temp.style.display='block';
			temp.querySelector('span:nth-of-type(1)').innerHTML = ' '+reply.replyNo;
			temp.querySelector('b').innerHTML = ' '+reply.reply;
			temp.querySelector('span:nth-of-type(2)').innerHTML = ' '+reply.replyer;
			temp.querySelector('span:nth-of-type(3)').innerHTML = ' '+reply.replyDate;
			return temp;
		}


</script>
<%@include file="../layout/footer.jsp"%>