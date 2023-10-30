//ajax1.js
//Asynchronous JavaScript And XML:
//비동기 vs 동기
//동기 방식=>순서대로 진행됨
//let friends = [];
//friends.push('홍길동');
//friends.push('김길동');
//friends.push('최길동');
//console.log(friends);

//비동기방식(작업이 끝나는 순서대로 담음)=>진행되는 시간을 줄일 수 있음
import{table} from './ajaxmodule.js';
let friends = [];
setTimeout(function(){
	friends.push('홍길동');
},1000); //함수를 실행하는데 1초 있다가 실행하겠습니다

setTimeout(function(){
	friends.push('김길동');
},500);

setTimeout(function(){
	friends.push('최길동');
},2000);

console.log(friends);

let newMember = 
	{mid:'M009',pass:'9999',name:'민식이',phone:'010-9999-9999'};
//newMember 값을 이용해서 tbody="list"에 추가


let xhtp = new XMLHttpRequest();
xhtp.open('get','../MemberListServlet2');
xhtp.send();
xhtp.onload = loadJSON;
//xhtp.onload = loadXML;

function loadJSON(){
	console.log(xhtp.responseText);
	let result = JSON.parse(xhtp.responseText);
	console.log(result);
	let titles = ["회원번호","비번","이름","연락처"];
	let dataAry = [];
	result.forEach(member =>{
		dataAry.push({mid:member.mid,pass:member.pass,name:member.name,phone:member.phone})
	})
	result = table.makeTable(titles,result);
	document.getElementById('show').innerHTML = result;
}

function loadXML(){
	console.log(xhtp.responseXML);
	let doc = xhtp.responseXML;
	let records = doc.getElementsByTagName('record');
	console.log(records);
	let titles = ["회원번호","비번","이름","연락처"];
	let dataAry = [];
	for(let record of records){
		let obj = {
			mid:record.children[0].textContent,	//mid값 불러오기
			pass:record.children[1].textContent,
			name:record.children[2].textContent,
			phone:record.children[3].textContent}
			dataAry.push(obj);
	}
	let result = table.makeTable(titles,dataAry);
	console.log(result);
	document.getElementById('show').innerHTML = result;
	let tr = '<tr><td>'+newMember.mid+'</td><td>'+newMember.pass+'</td><td>'+newMember.name+'</td><td>'+newMember.phone+'</td></tr>'
	document.getElementById('list').innerHTML += tr;
}//end of onload
