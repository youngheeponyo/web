//function4.js

//생성자 함수=>Member
function Member(name,age,height){
    this.name = name;
    this.age = age;
    this.height = height;
    this.showInfo = function(){
        return `저의 이름은 ${name}입니다`
    }
}
//makeTr 함수
function makeTr(mem){
    let str = '';
    str += '<tr>';
    str += '<td>'+mem.name+'</td>'
    str += '<td>'+mem.age+'</td>'
    str += '<td>'+mem.height+'</td>'
    str += '<td>'+mem.showInfo()+'</td>'
    str += '<td><button onclick="this.parentElement.parentElement.remove()">삭제</button></td>'
    str += '</tr>';
    return str;
}

document.getElementById('saveBtn').onclick = function(e){
    console.log(e.target);
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let height = document.getElementById('height').value;

    const mem = new Member(name,age,height);
    let str = makeTr(mem);	//<tr></tr>

    if(document.getElementById('name').value == null){
        alert('입력해주세요')
    }else{
        document.getElementById('list').innerHTML += str;
        // function Member(), makeTr(member)
    }

    document.getElementById('name').value = "";
    document.getElementById('age').value = "";
    document.getElementById('height').value = "";
    document.getElementById('name').focus();
}


