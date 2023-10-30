//ajax2.js

import {table} from './ajaxmodule.js';

//onclick  이벤트 등록<button onclick="addMember()">바로 적어도 되고
document.getElementById('addBtn').onclick = addMember;	//이렇게 해도 됨

function addMember(e) {
	let mid = document.getElementById('mid').value;
	let pass = document.getElementById('pass').value;
	let name = document.getElementById('name').value;
	let phone = document.getElementById('phone').value;
	const xhtp = new XMLHttpRequest();
	xhtp.open('get','../AddMemberServlet.html?mid='+mid+'&pass='+pass+'&name='+name+'&phone='+phone);
	xhtp.send();
	xhtp.onload = function(){
		console.log(xhtp.responseText);
		//사용자가 입력한 값을 return코드가 ok이면 {vo:mid,pass,name,phone}
		//tr 생성하여 td도 생성 tbody id값이 list인 것에 추가해주기=>화면에 출력
		//return코드가 ng이면 alert을 사용하여 에러발생 경고창 띄우기 후 list 추가 금지
		let result = JSON.parse(xhtp.responseText);
		if(result.retCode=="OK"){
			document.getElementById('list').innerHTML += table.makeTr(result.vo);
		}else{
			alert('다시 입력하세요');
		}
	} 
}

document.getElementById('modBtn').onclick = modMember;

function modMember(e){
	let mid = document.getElementById('mid').value;
	let pass = document.getElementById('pass').value;
	let name = document.getElementById('name').value;
	let phone = document.getElementById('phone').value;
	const xhtp = new XMLHttpRequest();
	xhtp.open('get','../ModMemberServlet.html?mid='+mid+'&pass='+pass+'&name='+name+'&phone='+phone);
	xhtp.send();
	xhtp.onload = function(){
		let result = JSON.parse(xhtp.responseText);
		//데이터 영역의 tr
		document.querySelectorAll('#list tr').forEach( tr => {
			if(tr.children[0].innerHTML==result.vo.mid){
				tr.children[1].innerHTML = result.vo.pass;
				tr.children[2].innerHTML = result.vo.name;
				tr.children[3].innerHTML = result.vo.phone;			
			}
		})

	}
}
	


