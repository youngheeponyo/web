//string1.js

let str1 = "Hello"; //기본 데이터 타입(문자열 자체)
let str2 = new String("Hello");	//객체타입

console.log(typeof str1, typeof str2)
console.log(str1 == str2);	//두개의 값만 비교
console.log(str1 === str2);	//두개의 타입 비교(값과 변수의 유형까지 비교)

console.log(str1.toUpperCase());

let result = "   공백 제거 합니다.   ".trim();
console.log(result,'문자 길이 : ',result.length)

//알고 있어야 하는 함수
//replace(),split(),slice(),substr(),subString()
//toString(),indexOf(),lastIndexOf(),charAt(),includes()
//concat()

result = "Hello, World, Nice, World".replace(',','!');		//,의 첫번째 값을 찾아 ! 값으로 바꿔줌(나머지는 안 바꿔줌)
console.log('1:',result);

result = "Hello, World, Nice, World".replace(/,/g,'!');	//,이라는 값을 모두 찾아 !로 바꿈(/찾을값/gi,바꿀값)
console.log('2',result);

result = "Hello World Nice World".replace(/\s/g,'~');	//공백을 찾아서 ~으로 바꿔줌
console.log('3',result);