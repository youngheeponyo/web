//object1.js

//클래스의 추가 메소드 작성.prototype 속성에 지정
Member.prototype.setBloodType = function(bloodType){
	this.bloodType = bloodType
}
Member.prototype.getBloodType = function(){
	return this.bloodType;
}

const mem2 = new Member('홍길동',21,178);
mem2.setBloodType('O형');
console.log(mem2.getBloodType());

//javascript에서 쓰는 클래스 추가 가능
String.prototype.truncate = function(){
	console.log(this);
	return this.substring(0,5)
}

let result = "helloWorld".truncate();
console.log(result);
