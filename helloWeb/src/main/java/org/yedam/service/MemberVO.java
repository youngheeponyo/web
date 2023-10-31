package org.yedam.service;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MemberVO {
	public MemberVO() {
		// TODO Auto-generated constructor stub
	}
	private String mid;
	private String pass;
	private String name;
	private String phone;
}
