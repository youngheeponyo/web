//object5.js : 객체 복사

const obj1 = {
	name : 'Hong',
	age : 20,
	weight : 66.6
	//다른 방식으로 bloodtype 객체 선언
}
console.log(obj1)
const obj2 = Object.assign({name:"kim",age:22, height:123.4},obj1);	//obj2에 obj1의 값을 그대로 담아줌(참조)	//값을 넣어줘도 1이 그대로 나오지만 새로운 속성이 들어가면 추가시켜줌

console.log(obj2);

const obj3 = obj1;
obj3.name='seo'

console.log(obj3);
console.log(obj1);

//상속
const obj4 = Object.create(obj1);	//처음에는 1의 값을 참조
obj1.name = "hwang"
console.log(obj4);
console.log(obj4.name);
//상속을 통해서 자식 객체를 생성하면 자식값이 바뀌기 전에는 부모값을 그대로 가지고 변경되면 자식 고유의 값을 가지게 됨
obj4.name="Kim";		//값을 변경 시 부모와는 다른 값을 가지게 됨(유지)
console.log(obj4.name);

//객체의 속성을 정의하는 방법. 객체의 속성기술자
//obj1.bloodtype = "O형"
Object.defineProperty(obj1,'bloodType',{
	set:function(bt){
		if(bt == "A"|| bt == "B"||bt=="O"||bt=="AB"){
			this._bloodType = bt;
		}else{
			console.log('잘못된 유형입니다');
		}
	},
	get:function(){
		return this._bloodType;
	}
})
obj1.bloodType="O"	//setter로 값 지정
console.log(obj1.name,'의 혈액형 : ',obj1.bloodType)		//getter로 값 가져오기

//속성정의 시 속성값과 this객체의 속성을 달리하는 이유는?
//객체의 속성 정의 시 get, set을 어디서 확인하는지?
