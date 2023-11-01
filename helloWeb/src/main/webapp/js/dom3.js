//dom3.js
//table>(thead>tr>th)+(tbody>tr>td)*데이터 갯수
import table from './domTable.js';

let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=TFWqtpjCNl5TF0rwNkfs2%2Facv343083oIbkMFifaiNPGwXCyS0SaBrLJZDr%2B7Ext6NPSpEsEV62MgyZc2KNWOA%3D%3D'
let titles = ['센터 id', '센터명', '시설', '연락처'];

fetch(url)
	.then(resolve => resolve.json())	//function(resolve){return resolve.json()}을 줄인것
	.then(fetchCallback)	//fetch는 함수 자체를 받기 때문에 함수이름만 적어주면 알아서 작동
	.catch(err => console.log('error : ', err))




//fetch에 의해 호출되는 함수. callback함수
function fetchCallback(result) {
	let rawData = result.data;	//result가 가진 속성 중 data만 가져옴	//원래 데이터

	let sidoAry = []; 	//여기에 sido정보를 출력(중복된 값은 제외)
	rawData.forEach((raw) => {
		if (sidoAry.indexOf(raw.sido) == -1) {
			sidoAry.push(raw.sido)
		}
	})
	let sidoSel = document.querySelector('#sidoList')
	let option = document.createElement('option');
		option.innerHTML = '선택하세요';
		sidoSel.append(option);
	sidoAry.forEach((sido) => {
		let option = document.createElement('option');
		option.innerHTML = sido;
		sidoSel.append(option);
	})
	//select 태그에 change이벤트 발생
	sidoSel.addEventListener('change', changeCallback);		//change라는 이벤트가 발생하면 함수를 실행하세요	//함수뒤에 괄호가 있으면 이벤트가 실행됐을 때가 아니라 바로 실행되기 때문에 그냥 함수 이름만 불러와야 한다.

	function changeCallback(e) {
		//console.log(e.target.value);	//선택한 값
		//선택된 시도 값에 대한 정보만 보여주고 싶음(센터명)-필터링한 값
		let searchSido = e.target.value;

		let filterAry = rawData.filter(center => searchSido == center.sido);
		genTable(filterAry);
	}
	genTable(rawData, 1);	//첫 화면에서 2페이지를 보고 싶을 때
	//let filterAry = rawData.filter((center,idx) => idx < 10);		//초기화면으로 서울특별시를 보여줌
	//genTable(filterAry);		//genTable(rawData)로 설정하면  전체 데이터를 다 보여주는게 초기화면으로 설정이 됨
}



//테이블 안에 속성을 만드는 것을 따로 빼내서 데이터마다 다르게 테이블 설정 가능함. rawData부분에 다른 데이터를 넣으면 그 값에 맞는 테이블 생성
function genTable(rawData = [], page = 1) {
	//초기화
	document.querySelector("#show").innerHTML = '';

	//보여줘야 할 데이터의 첫번째와 마지막을 계산(1~5)
	let startNo = (page - 1) * 5;		//인덱스 값을 맞추기 위해 1을 버림
	let endNo = page * 5;

	// 페이지에 대한 정보 만들어주기(첫페이지와 마지막 페이지 계산)
	let totalCnt = rawData.length;
	let lastPage = Math.ceil(totalCnt / 5);
	let endPage = page+2;
	let beginPage = page-2;
	let prevPage, nextPage = false;
	if(beginPage<1){
		beginPage=page;
	}
	if (beginPage > 1) {
		prevPage = true;
	}
	if (endPage < lastPage) {
		nextPage = true;
	}
	if (endPage > lastPage) {
		endPage = lastPage;
	}
	document.querySelector('.pagination').innerHTML = '';

	//이전 페이지 여부
	if (prevPage) {
		let aTag = document.createElement('a');
		aTag.setAttribute('href', '#');
		aTag.innerHTML = '&laquo;';
		aTag.addEventListener('click', function(e) {
			genTable(rawData, beginPage - 1)
		})
		document.querySelector('.pagination').append(aTag);
	}
	
	//전체 페이지
	for (let i = beginPage; i <= endPage; i++) {
		let aTag = document.createElement('a');
		aTag.setAttribute('href', '#');
		aTag.innerHTML = i;
		if (i == page) {
			aTag.setAttribute('class', 'active');
		}
		aTag.addEventListener('click', function(e) {
			genTable(rawData, i);
			
		})
		document.querySelector('.pagination').append(aTag);
	}

	//다음 페이지 여부
	if (nextPage) {
		let aTag = document.createElement('a');
		aTag.setAttribute('href', '#');
		aTag.innerHTML = '&raquo;';
		aTag.addEventListener('click', function(e) {
			genTable(rawData, endPage + 1)
		})
		document.querySelector('.pagination').append(aTag);
	}

	//전체 raw데이터로 출력한 값
	let thead = table.makeHead(titles);		//헤더정보
	thead.setAttribute('style', 'color:green')

	let mapData = rawData.reduce((acc, center, idx) => {	//매핑정보 출력
		if (idx >= startNo && idx < endNo) {
			let newCenter = {
				id: center.id,
				centerName: center.centerName.replace('코로나19 ', ''),
				facilityName: center.facilityName,
				phoneNumber: center.phoneNumber,
				lat: center.lat,
				lng: center.lng
			}
			acc.push(newCenter)
		}
		return acc;
	}, []);
	//console.log(mapData)

	let tb = document.createElement('table');
	tb.setAttribute('border', '1');
	//tb.setAttribute('style','border:solid');
	let tbody = table.makeBody(mapData);	//[{},{},{}...{}]같은 형태로 보냄
	tb.append(thead, tbody);
	document.querySelector("#show").append(tb);

	//tr 클릭 이벤트 등록(지도로 연결)
	let targetTr = document.querySelectorAll('tbody tr');
	targetTr.forEach(tr => {
		tr.addEventListener('click', function(e) {
			//console.log(tr.children[4].innerHTML,tr.children[5].innerHTML)		//내가 누룬 값의 위도,경도 값을 가져옴
			let lat = tr.dataset.lat;	//tr.children[4].innerHTML
			let lng = tr.dataset.lng;
			window.open('daumAPI.html?x=' + lat + '&y=' + lng);
		})
	})
}


