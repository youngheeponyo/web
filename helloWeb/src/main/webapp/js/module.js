//module.js

//import를 사용하려면 html의 script type을 반드시 모듈로 선언을 해줘야함
import {friendInfo} from "./friend.js";

import { makeCalendar } from "../todo/week.js";

const friend = {
	name : "Kim",
	num : '010-3333-4444',
	address : '인천광역시 중구 200',
	showInfo : function(){
		return `친구의 이름은 ${this.name}, 주소는 ${this.address}입니다`
	}
}
console.log(friend.showInfo())
console.log(friendInfo(friend));

makeCalendar();