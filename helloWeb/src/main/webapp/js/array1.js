//array1.js

const arr1 = []
arr1.push(10);
arr1.push('ten');
arr1.push({name : "Hong",age : 20});
arr1.unshift(20);	//맨 앞에 추가

console.log('배열 갯수 : ',arr1.length);

arr1.length = 3;	//앞에서부터 갯수만큼 잘라서 가져옴(배열 크기 지정 가능)
for(let ary of arr1){
	console.log('1:',ary);
}
console.log('배열 갯수2 : ',arr1.length);arr1

arr1.length = 5;	//추가되었지만 값이 없기에 undefined로 정의됨
for(let ary of arr1){
	console.log('2:',ary);
}
console.log('배열 갯수3 : ',arr1.length);arr1

arr1.pop();		//뒤에서부터 하나씩 삭제	//shift는 앞에서부터 지워짐
for(let ary of arr1){
	console.log('3:',ary);
}

arr1.splice(1,0,30);	//추가 삭제 수정 가능함	//0을 쓰면 인덱스 1번에 30을 추가(여러개의 값을 넣을 수 있음)	//1을 쓰면 인덱스 1번값을 30으로 수정	//1을 쓰고 대체값을 안쓰면 삭제
for(let ary of arr1){
	console.log('4:',ary);
}
arr1.splice(4,1)
for(let ary of arr1){
	console.log('4:',ary);
}





