//calendar


function makeBody(){
	let tb = '';
	tb += '<tr>';
	for(let i=1;i<=31;i++){
		if(i%7==0){
			tb += '<td>'+i+'</td>';
			tb += '</tr>';
		}else{
		tb += '<td>'+i+'</td>'
		}
	}
	
	return tb;
}
	function makeHead(days=[]){
		let tb = '';
		tb += '<table border="1"><tbody>';
		tb += '<tr bgcolor="greenblue">';
		tb += '<th>일</th>';
		tb += '<th>월</th>';
		tb += '<th>화</th>';
		tb += '<th>수</th>';
		tb += '<th>목</th>';
		tb += '<th>금</th>';
		tb += '<th>토</th>';
		tb += '</tr>';
		tb += makeBody();
		tb += '</tbody></table>';
		return tb;
	}
	document.getElementById('show').innerHTML += makeHead();

