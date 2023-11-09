<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>    



<h3>회원 목록</h3>
	<table class="table">
		<thead>
			<tr>
				<th>회원 아이디</th>
				<th>회원 비밀번호</th>
				<th>회원 이름</th>
				<th>회원 전화번호</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${list }" var="member">
			<tr>
				<td>${member.mid }</td>
				<td>${member.pass }</td>
				<td>${member.name }</td>
				<td>${member.phone }</td>
			</tr>
			</c:forEach>
		</tbody>
	</table>

