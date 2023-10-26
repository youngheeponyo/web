//10월달 calendar

const today = new Date();
let day = today.getDate();

function makeBody(){
	let tb = '';
	tb += '<tbody align = "middle"><tr>';
	for(let i=1;i<=31;i++){
		if(i%7==0){
			tb += '<td style="color:blue">'+i+'</td>';
			tb += '</tr><tr>';
		}else if(i%7==1){
			tb += '<td style="color:red">'+i+'</td>';
		}else if(i==day){
			tb += '<td style="font-weight:bolder" bgcolor="skyblue"><button id="todayBtn">'+i+'</button></td>'
		}else{
		tb += '<td>'+i+'</td>'
		}
	}
	tb += '</tr></tbody>';
	return tb;
}
	function makeHead(){
		let tb = '';
		tb += '<table border="1"><thead>';
		tb += '<tr>';
		tb += '<th>일</th>';
		tb += '<th>월</th>';
		tb += '<th>화</th>';
		tb += '<th>수</th>';
		tb += '<th>목</th>';
		tb += '<th>금</th>';
		tb += '<th>토</th>';
		tb += '</tr>';
		tb += makeBody();
		tb += '</thead></table>';
		return tb;
	}
	function makeCalendar(){
	document.getElementById('show').innerHTML = makeHead();		
	}
	makeCalendar();
