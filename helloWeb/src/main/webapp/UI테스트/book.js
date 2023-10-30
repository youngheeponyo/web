const table = {
	makeBody(dataAry = [{book_code,book_title,book_author,book_press,book_price}]){
		let bodyTag = "<tbody id='list'>"
		dataAry.forEach(data => {
			bodyTag += this.makeTr(data);
		})
		bodyTag += "</tbody>"
		return bodyTag;
	},
	makeTable(titleAry,dataAry){
		let tableTag = "<table border='1'>";
		tableTag += this.makeHead(titleAry) + this.makeBody(dataAry);
		tableTag += "</table>"
		return tableTag;
	},
	makeTr(book={}){
		let trTag = "<tr>";
		for(let prop in book){
			trTag += "<td>"+book[prop]+"</td>"
		}
		trTag += "</tr>"
		return trTag;
	}
}