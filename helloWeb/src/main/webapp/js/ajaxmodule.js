//ajaxmodule.js

const table = {
	makeHead(titles = ['회원아이디','비밀번호','이름','연락처']){
		let headTag = "<thead><tr>";
		titles.forEach(title => {
			headTag += "<th bgcolor='skyblue'>"+title+"</th>"
		})
		headTag += "</tr></thead>";
		return headTag;
	},
	makeBody(dataAry = [{mid,pass,name,phone}]){
		let bodyTag = "<tbody id='list'>"
		dataAry.forEach(data => {
			bodyTag += "<tr>";
			for(let prop in data){
				bodyTag += "<td>" + data[prop] + "</td>";
			}
			bodyTag += "</tr>";
			
		})
		bodyTag += "</tbody>"
		return bodyTag;
	},
	makeTable(titleAry,dataAry){
		let tableTag = "<table border='1'>";
		tableTag += this.makeHead(titleAry) + this.makeBody(dataAry);
		tableTag += "</table>"
		return tableTag;
	}
}

export{table}