<%@page import="co.yedam.board.service.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="../layout/menu.jsp" %>
<%@include file="../layout/header.jsp" %>
	<%
	BoardVO vo = (BoardVO) request.getAttribute("bno");
	%>
	<h3>상세화면</h3>
	<form action="modifyForm.do" name="myForm">
		<input type="hidden" name="bno" value="<%=vo.getBoardNo()%>">
		<table class="table">
			<tr>
				<th>글번호</th>
				<td><%=vo.getBoardNo()%></td>
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
			if(vo.getImage()!=null){
			%>
			<tr>
				<th>이미지</th>
				<td colspan="3"><img width="150px" height="100px" src="images/<%=vo.getImage()%>"></td>
			</tr>
			<%} %>
			<tr>
				<th>작성자</th>
				<td ><%=vo.getWriter()%></td>
				<th>조회수</th>
				<td ><%=vo.getViewCnt()%></td>
			</tr>
			<%if(logId != null && logId.equals(vo.getWriter())){ %>
			<tr>
				<td colspan="4">
					<input type="submit" value="수정">
					<input type="button" value="삭제">
				</td>
			</tr>
			<%}else if(respon.equals("Admin")){ %>
			<tr>
				<td colspan="4">
					<input type="submit" value="수정">
					<input type="button" value="삭제">
				</td>
			</tr>
			<%} %>
		</table>
	</form>

	<script>
		document.querySelector('input[type=button]').addEventListener('click', function(e){
			document.forms.myForm.action = "removeBoard.do";
			document.forms.myForm.submit();
		})
	</script>
<%@include file="../layout/footer.jsp" %>