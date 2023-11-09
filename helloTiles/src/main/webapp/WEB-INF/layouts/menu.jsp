<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div class="border-end bg-white" id="sidebar-wrapper">
<c:choose>
		<c:when test="${empty logId }">
			<div class="sidebar-heading border-bottom bg-light">로그인을 해주세요</div>
		</c:when>
		<c:when test="${respon == 'Admin'}">
			<div class="sidebar-heading border-bottom bg-light">관리자님 환영합니다</div>
		</c:when>
		<c:otherwise>
			<div class="sidebar-heading border-bottom bg-light">${logId }님 환영합니다</div>
		</c:otherwise>
		</c:choose>
          <div class="list-group list-group-flush">
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="main.do">처음으로</a>
                    <c:choose>
					<c:when test="${empty logId }">
						<a class="list-group-item list-group-item-action list-group-item-light p-3" href="loginForm.do">로그인화면</a>
					</c:when>
					<c:otherwise>
						<a class="list-group-item list-group-item-action list-group-item-light p-3" href="logout.do">로그아웃</a>
					</c:otherwise>
				</c:choose>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="boardList.do">게시글 목록</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="memberList.do">회원관리</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Status</a>
           </div>
      </div>