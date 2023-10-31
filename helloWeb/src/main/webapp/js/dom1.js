//dom1.js

const fruits = ['수박', '사과', '복숭아', '포도']

//#show>>ul>li:수박..

let ul = document.createElement('ul');

fruits.forEach(fruits => {
	const li = document.createElement('li');	//<li></li>
	li.innerHTML = fruits;	//li태그 사이에 값이 들어감
	ul.appendChild(li);

})
document.getElementById('show').appendChild(ul);