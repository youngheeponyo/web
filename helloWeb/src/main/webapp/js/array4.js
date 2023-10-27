//array4.js

const json = `
[{"id":1,"first_name":"Abra","email":"aferry0@fotki.com"},
{"id":2,"first_name":"Renault","email":"rkollasch1@businesswire.com"},
{"id":8,"first_name":"Rem","email":"rcockell7@telegraph.co.uk"},
{"id":9,"first_name":"Vernice","email":"vtracy8@thetimes.co.uk"},
{"id":10,"first_name":"Aurthur","email":"amcnellis9@elegantthemes.com"}]
`;

let members = JSON.parse(json);
let result = members.find(function(val,idx,ary){	//find => 조건에서 첫번째 true인 값을 만나면 그 값을 보여줌
	if(val.id>5){
		return true;
	}return false;
	//return value.id > 5;	
});
console.log('1:',result);

result = members.filter(function(val){		//filter => 조건에 만족하는 모든 true값을 보여줌
	return val.email.includes('com');
})
console.log('2:',result);

result = members.filter((val,idx)=>{
	return idx>=1 && idx<3
})
console.log('3:',result);

result = members.reduce((acc,item,idx)=>{
	if(idx>=1 && idx<3){
		acc.push(item);
	}
	return acc;
},[]);
console.log('4:',result);

//some,every => true,false

result = members.some((mem)=>{		//some은 하나라도 만족하면 되기때문에 조건에 만족하는 모든 값을 출력, every는 하나라도 false가 나오면 거기서 멈춤
	console.log(mem)
	return mem.first_name.length > 5;
})
console.log('5:',result);
console.clear();

//*) map : A -> B로 변경
result = members.map(mem => {	//새로운 정보를 넣어주고 싶을 때 map
	let obj = {id:mem.id,name:mem.first_name,email:mem.email,grade:'C'}
	return obj
})
console.log('6:',result);