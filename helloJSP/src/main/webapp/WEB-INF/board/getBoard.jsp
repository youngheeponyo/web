<%@page import="co.yedam.board.service.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<style>
#list span {
	margin: 4px;
}

.pagination {
  display: inline-block;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 5px;
}

.pagination a.active {
  background-color: #4CAF50;
  color: white;
  border-radius: 5px;
}

.pagination a:hover:not(.active) {background-color: #ddd;}
</style>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<jsp:include page="../layout/menu.jsp"></jsp:include>
<jsp:include page="../layout/header.jsp"></jsp:include>

<h3>상세화면</h3>
<form action="modifyForm.do" name="myForm">
	<input type="hidden" name="bno" value="${bno.boardNo }">
	<table class="table">
		<tr>
			<th>글번호</th>
			<td class="boardNo">${bno.boardNo }</td>
			<th>작성일시</th>
			<td><fmt:formatDate value="${bno.writeDate }" pattern="yyyy-MM-dd HH:mm:ss"></fmt:formatDate></td>
		</tr>
		<tr>
			<th>글제목</th>
			<td colspan="3">${bno.title }</td>
		</tr>
		<tr>
			<th>내용</th>
			<td colspan="4"><textarea rows="5" cols="40">${bno.content }</textarea></td>
		</tr>
		<c:if test="${!empty bno.image }">
			<tr>
				<th>이미지</th>
				<td colspan="3"><img width="150px" height="100px"
					src="images/${bno.image }"></td>
			</tr>
		</c:if>
		<tr>
			<th>작성자</th>
			<td>${bno.writer }</td>
			<th>조회수</th>
			<td>${bno.viewCnt }</td>
		</tr>
		<c:choose>
			<c:when test="${!empty logId && logId == bno.writer }">
				<tr>
					<td colspan="4"><input type="submit" value="수정"> <input
						type="button" value="삭제"></td>
				</tr>
			</c:when>
			<c:when test="${!empty respon && respon == 'Admin' }">
				<tr>
					<td colspan="4"><input type="submit" value="수정"> <input
						type="button" value="삭제"></td>
				</tr>
			</c:when>
			<c:otherwise>
				<tr>
					<td colspan="4"><input disabled type="submit" value="수정">
					<input disabled type="button" value="삭제"></td>
				</tr>
			</c:otherwise>
		</c:choose>
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
	<li id="template" style="display: none;"><span>00</span><b>첫번째글</b><span>user01</span><span>2023-10-10</span>
	<button>삭제</button></li>
</ul>

<div class="pagination">
</div>

<script>
		document.querySelector('input[type=button]').addEventListener('click', function(e){
			document.forms.myForm.action = "removeBoard.do";
			document.forms.myForm.submit();
		});
		
		//댓글목록
		let bno = "${bno.boardNo}";
		bno = document.querySelector('.boardNo').innerHTML;
		let page = 1;
		
		function showList(pg=1){
			document.querySelectorAll('#list li:not(:nth-of-type(1))').forEach(li => {	//첫번째는 template용도라서 지우면 안됨		//초기화
				li.remove();
			});
			fetch('replyList.do?bno='+ bno+'&page='+pg)
			.then(resolve=>resolve.json())
			.then(result=>{
					if(pg<0){
						page = Math.ceil(result.dto.total/5)
						showList(page);
						return;
					}
					
				result.list.forEach(reply => {
					let li = makeRow(reply);
					//ul>li 생성
					document.querySelector('#list').append(li);
				});
				//page생성
				//console.log(result.dto);
				makePaging(result.dto);
			})
			.catch(err=>console.log(err));
		}
		showList();


		//페이지링크 생성
		function makePaging(dto={}){
			document.querySelector('.pagination').innerHTML='';	//초기화

			if(dto.prev){
				let aTag = document.createElement('a');
				aTag.setAttribute('href',dto.startPage-1);
				aTag.innerHTML = "&laquo;";
				document.querySelector('.pagination').append(aTag);
			}
			for(let i=dto.startPage;i<=dto.endPage;i++){
				let aTag = document.createElement('a');
				aTag.setAttribute('href',i);
				aTag.innerHTML = i;
				//activce 녹색
				if(i==page){
					aTag.className='active';	//클래스 이름을 줄 때 className 사용
				}
				document.querySelector('.pagination').append(aTag);
			}
			if(dto.next){
				let aTag = document.createElement('a');
				aTag.setAttribute('href',dto.endPage+1);
				aTag.innerHTML = "&raquo;";
				document.querySelector('.pagination').append(aTag);
			}

			//a에 클릭이벤트 등록
			document.querySelectorAll('.pagination a').forEach(elem=>{
				elem.addEventListener('click',function(e){
					e.preventDefault();	//form이나 a의 기본 기능 차단(링크기능 차단)
					page = elem.getAttribute('href');
					showList(page);
				})
			})

		}
		
		//댓글등록 버튼
		let writer = "${logId}";
		let admin = "${respon}";
		document.querySelector('#addReply').addEventListener('click',function(e){
			let reply = document.querySelector('#content').value;
			if(!bno||writer==''||!reply){
				console.log(bno+writer+reply)
				alert('로그인 후 사용하실 수 있습니다');
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
					//document.querySelector('#list').append(makeRow(result.vo));
					showList(-1);
					//document.querySelector('#content').value='';
				}else{
					alert('Error');
				}

			})
		})

		function makeRow(reply){
			
			function deleteCallback(e){
				if((writer != null && reply.replyer==writer)||(admin=="Admin")){
					fetch('delReply.do?replyNo='+reply.replyNo)
					.then(resolve=>resolve.json())
					.then(result=>{
						if(result.retCode=='OK'){
							e.target.parentElement.remove();
							showList(page-1);
						}else{
							alert('에러가 났습니다')
						}
					})
					.catch(err=>console.log(err))
				}else{
					alert('삭제 권한이 없습니다')
				}
			}
			
			let temp = document.querySelector('#template').cloneNode(true);
			temp.style.display='block';
			temp.querySelector('span:nth-of-type(1)').innerHTML = ' '+reply.rn;
			temp.querySelector('b').innerHTML = ' '+reply.reply;
			temp.querySelector('span:nth-of-type(2)').innerHTML = ' '+reply.replyer;
			temp.querySelector('span:nth-of-type(3)').innerHTML = ' '+reply.replyDate;
			temp.querySelector('button').addEventListener('click', deleteCallback);
			return temp;
		}


</script>
<jsp:include page="../layout/footer.jsp"></jsp:include>