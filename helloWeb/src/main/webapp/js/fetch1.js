//fetch1.js

import { table } from './ajaxmodule.js';

fetch('../MemberListServlet2')
	.then((resolve) => {
		console.log('resolve : ', resolve);
		return resolve.json();	//json문자열을 자바스크립트 객체 타입으로 변환시켜주는 함수(.json()) JSON.parse와 같은 기능
	})
	.then((result) => {
		console.log('result  :', result)	//이 값을 가지고 데이터를 받아와 페이지를 만들 수 있음
		let titles = ["회원번호", "비번", "이름", "연락처"];
		let dataAry = result;
		result = table.makeTable(titles, 
		dataAry);
		document.getElementById('show').innerHTML = result;
	})
	.catch((err) => {
		console.log('error : ', err)
	})