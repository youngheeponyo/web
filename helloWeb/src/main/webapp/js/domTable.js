/**
 * domTable.js
 */

export default {
	hiddenFields:['lat','lng'],
	makeHead: function(titles = ['주소', '센터명']) {
		//thead>tr>th*n
		let thead = document.createElement('thead');
		let tr = document.createElement('tr');
		titles.forEach(title => {
			let th = document.createElement('th');
			th.innerHTML = title;
			tr.append(th);
		})
		thead.append(tr);
		return thead;
	},
	makeBody: function(dataAry = []) {
		let tbody = document.createElement('tbody');
		tbody.setAttribute('style', 'text-align : center')
		dataAry.forEach(item => {
			tbody.append(this.makeTr(item));
		})
		return tbody;
	},
	makeTr: function(center = {}) {
		let tr = document.createElement('tr');arguments
		tr.setAttribute('data-lat',center.lat);		// 숨긴 데이터 값을 다시 담아줌	//tr.dataset.lat
		tr.setAttribute('data-lng',center.lng);	
		for (let prop in center) {
			if(this.hiddenFields.indexOf(prop)>-1){
				continue;		//위도와 경도 값 숨기기
			}
			let td = document.createElement('td');
			td.innerHTML = center[prop];
			tr.append(td);
		}
		return tr;
	}
}