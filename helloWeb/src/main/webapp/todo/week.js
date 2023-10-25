//calendar

const cal = {
	weeks:[
		{week:'일'},
		{week:'월'},
		{week:'화'},
		{week:'수'},
		{week:'목'},
		{week:'금'},
		{week:'토'},
	]
};

function makeBody(day){
	let tb = '';
	tb += '<tr>';
	for(let i=1;i<=31;i++){
		tb += '<td>'+i+'</td>'
	}
	tb += '</tr>';
	//return tb;
}
	function makeHead(week=[]){
		let tb = '';
		tb += '<table><tbody>';
		tb += '<tr><th>'+week[0]+'</th>';
		tb += '<th>'+week[1]+'</td>';
		tb += '<th>'+week[2]+'</th>';
		tb += '<th>'+week[3]+'</th>';
		tb += '<th>'+week[4]+'</th>';
		tb += '<th>'+week[5]+'</th>';
		tb += '<th>'+week[6]+'</th></tr>';
		week.forEach(function(item){
			tb += makeBody(item);
		})
		tb += '</tbody></table>';
	document.getElementById('show').innerHTML = tb;
	}

makeHead(cal.weeks);

