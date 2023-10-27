//array3.js

let pos = "Hello, World".indexOf(',');
console.log(pos);

let name = ['콘','무지','라이언','어피치','브라운'];
pos = name.indexOf('무시')

if(pos==-1){
	console.log('찾는 값이 없습니다')
}else{
	console.log('무지의 위치 : ',name+1);
}

//객체 타입{name,age}
let members = [
	{name:'김민식',age:25},
	{name:'서영희',age:26},
	{name:'조민식',age:32},
	{name:'이민식',age:32}
];
let search='민식';
let count = 0;
members.forEach((mem)=>{
	if(mem.name.indexOf(search) != -1){
		count++;
	}
})
console.log('민식은 총',count,'명입니다')
