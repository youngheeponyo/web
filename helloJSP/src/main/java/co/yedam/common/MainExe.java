package co.yedam.common;

import java.util.Scanner;

import co.yedam.studuent.service.StudentService;
import co.yedam.studuent.serviceImpl.StudentServiceImpl;

public class MainExe {
	public static void main(String[] args) {
		
		StudentService svc = new StudentServiceImpl();
		
		Scanner sc = new Scanner(System.in);
		System.out.println("==========================================");
		System.out.println("1.목록 |2. 등록 |3.수정 |4.삭제 |5. 단건 조회");
		System.out.println("==========================================");
		System.out.print("번호를 선택하세요 = ");
		int selNo = sc.nextInt();sc.nextLine();
		switch(selNo) {
		case 1:
			svc.listStudent().forEach(student->System.out.println(student));
		case 2:
			
		}
			
	}
}
