/**
 * 
 */

// async function studentList() {
// 	let req = await fetch('../studentList.do');
// 	let json = await req.json();	//{"retCode":"OK"} --> {retCode:"OK"}
// 	let tbody = document.querySelector('#list');
// 	try {
// 		json.forEach(student => {
// 			tbody.append(makeTr(student));
// 		})
// 	} catch (err) {
// 		console.log('error : ', err)
// 	}
// }

 export default {
	 //목록 가져오기
	 async studentList(successCallback,errorCallback){
		 let req = await fetch('../studentList.do');
		 let json = await req.json();
		 try{
			 successCallback(json);
		 }catch(err){
			 errorCallback(err);
		 }
	 },
	 //단건 조회
	async getStudent(id,successCallback,errorCallback){
		  let req = await fetch('../SelectStudentServlet.do?sid='+id);
		 let json = await req.json();
		 try{
			 successCallback(json);
		 }catch(err){
			 errorCallback(err);
		 }
	 },
	 //학생 등록
	 async addStudent(optObj,successCallback,errorCallback){
		 let req = await fetch('../addStudent.do',optObj);
		 let json = await req.json();
		 try{
			 successCallback(json);
		 }catch(err){
			 errorCallback(err);
		 }
	 },
	 //학생 수정
	 async modStudent(optObj,successCallback,errorCallback){
		 let req = await fetch('../editStudent.do',optObj);
		 let json = await req.json();
		 try{
			 successCallback(json);
		 }catch(err){
			 errorCallback(err);
		 }
	 },
	 //학생 삭제
	 async removeStudent(id,successCallback,errorCallback){
		 let req = await fetch('../delStudent.do?sid='+id);
		 let json = await req.json();
		 try{
			 successCallback(json);
		 }catch(err){
			 errorCallback(err);
		 }
	 }
 }