//array5.js

const arr1 = ['펭수','라이언','어피치','콘','무지'];
arr1.sort();
console.log(arr1);	//배열 자체를 변경, 순서를 변경시킴(가나다 순으로)

const arr2 = [4,8,1,12,23,9];
arr2.sort(function(a,b){
	if(a < b){
		return -1;	//오름차순(반대는 내림차순)
	}else{
		return 1;
	}
});
console.log(arr2)

const json = `
[{"id":1,"first_name":"Abra","email":"aferry0@fotki.com"},
{"id":2,"first_name":"Renault","email":"rkollasch1@businesswire.com"},
{"id":8,"first_name":"Rem","email":"rcockell7@telegraph.co.uk"},
{"id":9,"first_name":"Vernice","email":"vtracy8@thetimes.co.uk"},
{"id":10,"first_name":"Aurthur","email":"amcnellis9@elegantthemes.com"}]
`;

let members = JSON.parse(json);

members.sort((a,b)=>{
	if(a.first_name<b.first_name) return -1
	else return 1
}).reverse();		//reverse() : 역순 정렬
console.log(members);