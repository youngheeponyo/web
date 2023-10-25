//object4.js

const obj = {
	sno:1001,
	sname:'홍길동',
	address:'대구 중구 100번지',
	friends:[
		{name : '김민수',phone:'010-1234-1234'},
		{name : '강민지',phone:'010-1554-1434'},
		{name : '유자현',phone:'010-1258-1357'},
		{name : '안지민',phone:'010-1577-1742'}
	],
	hobbies:[
		'독서','영화보기','여행','요리'
	]
}


console.log(obj['sname']);
console.log(obj.sname);
console.log('친구는 ',obj.friends.length,'명입니다.')
console.log('첫번째 친구 이름은 ',obj['friends'][0].name,'입니다.')
console.log('두번째 친구 전화번호는 ',obj['friends'][1].phone,'입니다.')
obj.hobbies.forEach(hobby=>console.log('홍길동의 취미는 ',hobby,'입니다'))
obj.friends[0].name = '이민수';//값 바꾸기
console.log('첫번째 친구 이름은 ',obj['friends'][0].name,'입니다.')	
obj.pets = ['고양이','강아지','악어','멧돼지'];
obj.pets[3] = '붕어';
console.log(obj.pets[3])
obj.pets.forEach(pet=>console.log('홍길동의 펫은 ',pet,'입니다'))

obj.addFriend = function(friend){
	this.friends.push(friend);
}

obj.addFriend({name:'김주민',phone:'010-4253-1356'});
console.log('친구는 ',obj.friends.length,'명입니다.')

for(let i=0;i<obj.friends.length;i++){
	console.log(i,'번째 친구 이름은' ,obj.friends[i].name)
}