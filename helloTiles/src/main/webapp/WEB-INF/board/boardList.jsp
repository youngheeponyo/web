<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>



	<h3>게시판 목록</h3>
	<p><a href="boardForm.do">등록하기</a></p>
	<table class="table">
		<thead>
			<tr>
				<th>글번호</th>
				<th>제목</th>
				<th>작성자</th>
				<th>작성일시</th>
				<th>최근 수정날짜</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${list }" var="vo">
				<tr>
					<td>${vo.boardNo }</td>
					<td><a href="getBoard.do?bno=${vo.boardNo }">${vo.title }</a></td>
					<c:choose>
						<c:when test="${vo.writer=='M001' }">
							<td style="color:red">관리자</td>
						</c:when>
						<c:otherwise>
							<td>${vo.writer }</td>
						</c:otherwise>
					</c:choose>
					<td><fmt:formatDate value="${vo.writeDate }" pattern="yyyy-MM-dd HH:mm:ss"></fmt:formatDate></td>
					<td><fmt:formatDate value="${vo.lastUpdate }" pattern="yyyy-MM-dd HH:mm:ss"></fmt:formatDate></td>
				</tr>
			</c:forEach>
			
		</tbody>
	</table>
