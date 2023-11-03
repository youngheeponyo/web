/**
 * js/student.js
 */

//페이지가 로딩되면서 바로 실행
//비동기방식코드 -> 순차적, 가독성이 높아짐. async, await
//async 함수(
//await 처리 코드(async 안에서만 사용 가능)->이 기능이 끝나야지 다음으로 넘어감(promise 객체를 반환해야지 처리가 가능함)
//await 처리 코드
//)

import svc from './service.js';

// fetch('../studentList.do')
// 	.then(resolve => resolve.json())
// 	.then(result => {
// 		console.log(result);
// 		let tbody = document.querySelector('#list');
// 		result.forEach(student => {
// 			tbody.append(makeTr(student));
// 		})
// 	})
// 	.catch(err => console.log('error : ', err))

//위의 코드를 아래의 코드로 변경
svc.studentList(
	//successCallback
	(result) => {
		let tbody = document.querySelector('#list');
		result.forEach(student => {
			tbody.append(makeTr(student));
		})
		//errorCallback
	}, (err) => { console.log('error : ', err) });


document.querySelector('#addBtn').addEventListener('click', addCallback)
document.querySelector('#modBtn').addEventListener('click', modCallback)

function addCallback(e) {
	let id = document.getElementById('id').value;	//querySelector나 getElementById실행 가능
	let name = document.getElementById('name').value;
	let pwd = document.getElementById('pwd').value;
	let dept = document.getElementById('selDept').value;
	let birth = document.getElementById('birth').value;

	let param = `id=${id}&name=${name}&pwd=${pwd}&dept=${dept}&birth=${birth}`;		//이렇게 입력값을 받을 수 있음

	svc.addStudent({
		//optObj
		method: 'post',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: param
	},
		//successCallback = >
		result => {
			console.log(result)
			if (result.retCode == 'OK') {
				alert('등록 성공!');
				let tr = makeTr({ studentId: id, studentName: name, studentBirthday: birth });
				document.getElementById('list').append(tr);
			} else {
				alert('등록 실패')
			}
		},
		//errorCallback
		err => console.log('error: ', err)
	);

	// 	fetch('../addStudent.do', {
	// 		method: 'post',	//get과 post의 차이:get은 url패턴, 값이 제한있음. post는 parat값이 표현이 안되기때문에 비밀 유지 가능하며 값의 제한이 없다 content->type지정을 해줘야함
	// 		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
	// 		body: param
	// 	}).then(resolve => resolve.json())
	// 		.then(result => {
	// 			console.log(result)
	// 			if (result.retCode == 'OK') {
	// 				alert('등록 성공!');
	// 				let tr = makeTr({ studentId: id, studentName: name, studentBirthday: birth });
	// 				document.getElementById('list').append(tr);
	// 			} else {
	// 				alert('등록 실패')
	// 			}
	// 		})
	// 		.catch(err => console.log('error: ', err))
}
function modCallback(e) {
	let id = document.querySelector('.modal-body input[name=sid]').value
	let name = document.querySelector('.modal-body input[name=name]').value
	let pass = document.querySelector('.modal-body input[name=pass]').value
	let dept = document.querySelector('.modal-body input[name=dept]').value
	let birth = document.querySelector('.modal-body input[name=birth]').value
	let param = `sid=${id}&name=${name}&pwd=${pass}&dept=${dept}&birth=${birth}`;

	svc.modStudent({
		//oopObj
		method: 'post',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: param
	},
		//successCallback
		result => {
			console.log('result', result)
			if (result.retCode == 'OK') {
				alert('수정 성공!');
				let targetTR = document.querySelector('tr[data-sid=' + result.vo.studentId + ']');
				let newTr = makeTr(result.vo);
				let parentElem = document.querySelector('#list');
				parentElem.replaceChild(newTr, targetTR)	//부모요소에서 자식요소를 바꿀 때
				document.getElementById("myModal").style.display = 'none';
			} else {
				alert('수정 실패')
			}
		},
		//errorCallback
		err => console.log('error: ', err)
	)


	// fetch('../editStudent.do', {
	// 	method: 'post',
	// 	headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
	// 	body: param
	// })
	// 	.then(resolve => resolve.json())
	// 	.then(result => {
	// 		console.log('result', result)
	// 		if (result.retCode == 'OK') {
	// 			alert('수정 성공!');
	// 			let targetTR = document.querySelector('tr[data-sid=' + result.vo.studentId + ']');
	// 			let newTr = makeTr(result.vo);
	// 			let parentElem = document.querySelector('#list');
	// 			parentElem.replaceChild(newTr, targetTR)	//부모요소에서 자식요소를 바꿀 때
	// 			document.getElementById("myModal").style.display = 'none';
	// 		} else {
	// 			alert('수정 실패')
	// 		}
	// 	})
	// 	.catch(err => console.log('error: ', err))
}//end modCallback


function makeTr(obj) {
	let showFields = ['studentId', 'studentName', 'studentBirthday'];
	let tr = document.createElement('tr');
	tr.setAttribute('data-sid', obj.studentId)
	tr.addEventListener('dblclick', showModal);

	for (let prop of showFields) {
		let td = document.createElement('td');
		td.innerHTML = obj[prop];
		tr.append(td);
	}

	//삭제버튼 만들기
	let td = document.createElement('td');
	let btn = document.createElement('button');
	btn.setAttribute('data-sid', obj.studentId);
	btn.addEventListener('click', function(e) {
		svc.removeStudent(
			obj.studentId,
			result => {
				if (result.retCode == 'OK') {
					alert('삭제 성공!');
					tr.remove();
				} else {
					alert('삭제 실패');
				}
			},
			err => console.log('error: ', err)
		)
		
		
		//ajax호출=>서블릿을 실행하겠다는 의미
		// fetch('../delStudent.do?sid=' + obj.studentId)
		// 	.then(resolve => resolve.json())
		// 	.then(result => {
		// 		if (result.retCode == 'OK') {
		// 			alert('삭제 성공!');
		// 			tr.remove();
		// 		} else {
		// 			alert('삭제 실패');
		// 		}
		// 	})
		// 	.catch(err => console.log('error: ', err));
	})
	btn.innerHTML = "삭제";
	td.append(btn);
	tr.append(td);
	return tr;
}

//모달 보여주기
function showModal(e) {
	//console.log(e.target.parentElement,this);

	let id = this.children[0].innerHTML;	//이값을 가지고 데이터를 가져오기
	id = this.dataset.sid	//'data-sid'
	var modal = document.getElementById("myModal");
	svc.getStudent(
		id,
		result => {
			modal.style.display = "block"
			modal.querySelector('h2').innerHTML = result.studentId;
			modal.querySelector('input[name=sid]').value = result.studentId;
			modal.querySelector('input[name=name]').value = result.studentName;
			modal.querySelector('input[name=pass]').value = result.studentPassword;
			modal.querySelector('input[name=dept]').value = result.studentDept;
			modal.querySelector('input[name=birth]').value = result.studentBirthday;
		},
		err => console.log('error: ', err)
	)

	// fetch('../SelectStudentServlet.do?sid=' + id)
	// 	.then(resolve => resolve.json())
	// 	.then(result => {
	// 		modal.style.display = "block"
	// 		modal.querySelector('h2').innerHTML = result.studentId;
	// 		modal.querySelector('input[name=sid]').value = result.studentId;
	// 		modal.querySelector('input[name=name]').value = result.studentName;
	// 		modal.querySelector('input[name=pass]').value = result.studentPassword;
	// 		modal.querySelector('input[name=dept]').value = result.studentDept;
	// 		modal.querySelector('input[name=birth]').value = result.studentBirthday;
	// 	})
	// 	.catch(err => console.log('error: ', err));

	// Get the modal
	modal.querySelector('h2').innerHTML = "여기에..";

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
}
