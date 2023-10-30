package org.yedam.service;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data	//getter,setter 다 쓰지 않아도 data 쓰면 다 포함되어서 만들어짐
@AllArgsConstructor	//모든 매개값을 가진 생성자를 만드는 방법
@NoArgsConstructor	//아무 매개값을 가지지 않는 생성자 만드는 방법
public class MemberVO {
	private String mid;
	private String pass;
	private String name;
	private String phone;
}
