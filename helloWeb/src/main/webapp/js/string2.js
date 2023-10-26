//string2.js

const words ='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae id quod distinctio explicabo alias architecto at vero, ut totam cum laudantium voluptatum ipsa, repellat excepturi a asperiores. Architecto, vitae consequatur.';
//1. 각각의 단어를 공백을 기준으로 가져온 단어의 크기가 5보다 큰 문장을 콘솔에 출력
let overword = words.match(/\s\w+/gi);
for(let i=0;i<overword.length;i++){
	if(overword[i].length>5){
	console.log(overword[i]);
	}
}


//2. 주민번호를 입력받아서 그 사람이 남자인지 여자인지 구분
let ssn =prompt('주민번호를 입력하세요')
function checkGender(ssn){
	//990912 2134252 형태든 9909122134252 형태든 990912-2134252 형태든 상관없이 구분이 가능해야함
	if(ssn.length==14){
		let gendernum = ssn.substr(7,1)
		if(gendernum==1){
			console.log("남자입니다");
		}else if(gendernum==2){
			console.log("여자입니다");
		}else{
			console.log("번호가 정확하지 않습니다");
		}
	}else if(ssn.length==13){
		let gendernum = ssn.substr(6,1)
		if(gendernum==1){
			console.log("남자입니다");
		}else if(gendernum==2){
			console.log("여자입니다");
		}else{
			console.log("번호가 정확하지 않습니다");
		}
	}
}
checkGender(ssn);
//3. 파일명과 파일 확장자
let file = "d:/temp/sample/book.xls";
let fileName, fileExt;	//파일명과 확장자 구하기


let ext = file.match(/.\w+/gi);
for(let i=0;i<ext.length;i++){
	if(ext[i].includes('.')==true){
		fileExt = ext[i].slice(1);
		fileName = ext[i-1].slice(1);
	}
}

console.log('파일 이름 : ',fileName);
console.log('확장자 : ',fileExt);


