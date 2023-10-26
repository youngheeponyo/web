//object6
//map,set

const map = new Map();
map.set("홍길동",80);
map.set("김민수",85);
map.set("김민수",100);	//기존값을 덮어버림
map.set("이지은",92);

map.delete("이지은");

const refval = [12];
map.set(refval,88);
map.get(refval);
console.log(map.get(refval));

console.log(map.get("홍길동"));
for(let ent of map.entries()){	//모든 키와 값을 배열타입으로 반환해줌
	console.log(ent)
	console.log('이름 : ',ent[0],',점수 : ',ent[1]);
}

map.forEach(function(a,b,c){	//value,key,map자체 순으로 가져옴
	console.log(a,b,c);
})

//val에 조건을 줄 때
map.forEach(function(val,key,map){
	if(val > 90){
		console.log(val,key)
	}
})

//홍길동(key)의 점수만 보고 싶을 때
map.forEach(function(val,key){
	if(key=="홍길동"){
		console.log(val)
	}
})

//맵 <-> 배열
//배열 안에 다시 배열로 선언되어 있음
const ary = [['프로도',3],['라이언',5],['어피치',4]];
//map(생성자:배열)
const fmap = new Map(ary);
console.log(fmap)
for(let ent of fmap.entries()){
	console.log(ent);
	console.log('키 값 : ',ent[0],',값 : ',ent[1]);
}

const entries = fmap.entries();
console.log(entries)	//entries : mapIterator 타입
console.log(Array.from(fmap));

console.clear();

//set: 중복된 값은 허용하지 않음
const set1 = new Set();
set1.add("라이언");
set1.add("프로도");
set1.add("어피치");
set1.add("어피치");

console.log(set1.size);
set1.forEach(function(val,item,set){		//첫번째 두번째 모두 값을 보여주고 마지막은 set자체를 보여준다
	console.log(val,item,set);
})

const setAry = ['라이언','프로도','무지','무지']
const set2 = new Set(setAry);
set2.add("콘");
set2.add("무지");
set2.add("프로도");

console.log(set2.size);
console.log(Array.from(set2));