//dom2.js

//#show>table>tbody>(tr>td:사과+td:1000)
const fruits = [
	{name:"사과",price:1000, farmer : '홍길동'},
	{name:"복숭아",price:1500, farmer : '김민서'},
	{name:"포도",price:2000, farmer : '이미자'},
	{name:"수박",price:3000, farmer : '김선중'}
]

const tb = document.createElement('table');
tb.setAttribute('border','1');

const thead = document.createElement('thead');
tb.appendChild(thead);
thead.setAttribute('bgcolor','pink');

const title = ["과일명",'가격','생산자'];
title.forEach(tt => {
	const th1 = document.createElement('th');
	th1.innerHTML = tt;
	thead.appendChild(th1);
});

const tbody = document.createElement('tbody');
fruits.forEach(fruit => {
	const tr = document.createElement('tr');
	
	for(let prop in fruit){		//변수가 많을 때는 for문을 돌려서 사용
		const td1 = document.createElement('td');
		td1.innerHTML = fruit[prop];
		tr.appendChild(td1);	
	}
	tbody.appendChild(tr);
})
tb.appendChild(tbody);

document.getElementById('show').appendChild(tb);