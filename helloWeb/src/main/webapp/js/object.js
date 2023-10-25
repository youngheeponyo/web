//object.js
console.log('object start');

let obj1 = {
	name : 'Hong',
	age : 20 
};

let obj2 = obj1;	//주소값을 참조
//console.log(obj1);

obj2.age = 22;
console.log(obj2);
console.log(obj1);	//바뀐 결과값이 1에서도 바뀜

//복사
let obj3 = {...obj1};	//펼침연산자로 안의 값을 복사해옴
obj3.age = 23;
console.log(obj1);	//1의 값은 바뀌지 않음
console.log(obj3);

//클래스
class Member {
	constructor(name,age,height){
		this.name = name;	//this로 선언하면 클래스 안에 필드가 됨
		this.age = age;
		this.height = height;
	}
	setWeight(weight){
		this.weight = weight;
	}
	getWeight(){
		return this.weight;
	}
	showInfo(){
		return `이름 : ${this.name}, 나이 : ${this.age}세`;
	}
	// 학생의 정보 : 학생번호, 학생이름, 영어점수, 수학점수
	makeTr(student={sno,sname,engScore,mathScore}){
		let str = '';
		str += '<tr>',
		str += '<td>'+student.sno+'</td>';
		str += '<td>'+student.sname+'</td>';
		str += '<td>'+student.engScore+'</td>';
		str += '<td>'+student.mathScore+'</td>';
		str += '<td><button onclick="this.parentElement.parentElement.remove()">삭제</button></td>';
		str += '</tr>'
		return str;
	}
	makeHtml(studentAry=[]){
		let str = '';
		let obj = this;
		str += '<table border ="1">';
		str += '<tbody>';
		str += '<tr><th>학번</th><th>이름</th><th>영어점수</th><th>수학점수</th></tr>';
		studentAry.forEach(function(stud){
			str += obj.makeTr(stud);
		});
		//str += studentAry.reduce((acc,stud)=>acc+obj.makeTr(stud),'');
		str += '</tbody>';
		str += '</table>';
		this.html = str;
		}
	showPage(dom){
		dom.innerHTML = this.html;
	}
}

const mem1 = new Member('홍길동',20,187.4);
console.log(mem1.showInfo());
mem1.setWeight(62.1);
console.log('홍길동의 몸무게는 ',mem1.getWeight(),'입니다');