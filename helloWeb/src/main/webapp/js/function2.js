//function1.js
console.log('function.js');

//Member member = new Member();
const member = {
    name : '홍길동',
    age : 18,
    height : 189.9,
    showInfo: function(){
        return (`이름은 ${this.name}, 나이는 ${this.age}, 키는 ${this.height}입니다.`);
    }
}

const member1 = {
    name : '김민지',
    age : 20,
    height : 155.2,
    showInfo: function(){
        return (`이름은 ${this.name}, 나이는 ${this.age}, 키는 ${this.height}입니다.`);
    }
}

const member2 = {
    name : '서영희',
    age : 26,
    height : 161,
    showInfo: function(){
        return (`이름은 ${this.name}, 나이는 ${this.age}, 키는 ${this.height}입니다.`);
    }
}

const members = [member,member1,member2]


let show = document.getElementById('show');     //table>(thead>tr>th)+(tbody>tr>td*2)

let str = "";
str += '<table border = "1">';
str += '<tbody>';
members.forEach(function(item){
    str += makeTr(item);
})
str += '</tbody>';
str += '</table>';

show.innerHTML = str;  //화면에 나타나게 함 table>tbody>(tr>td*4)*3


function makeTr(member={name,age,height,showInfo}){
    let html = '';
    html += '<tr>';
    html += '<td>'+member.name+'</td>';
    html += '<td>'+member.age+'</td>';
    html += '<td>'+member.height+'</td>';
    html += '<td>'+member.showInfo()+'</td>';
    html += '</tr>';
    return html;
}

// console.log(makeTr(member));
