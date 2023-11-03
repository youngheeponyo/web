<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>첫페이지입니다</title>
</head>
<body>
	<%
	response.sendRedirect("boardList.do");	//바로 여기(boardList.do)로 열리도록 요청을 한것
	%>
</body>
</html>