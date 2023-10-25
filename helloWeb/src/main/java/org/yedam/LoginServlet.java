package org.yedam;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public LoginServlet() {
        super();
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		Map<String,Integer> map = new HashMap<>();
		map.put("홍길동", 90);
		map.put("김길동", 95);
		map.put("박길동", 80);
		map.put("서길동", 88);
		map.put("이길동", 85);
		
		Set<String> keyset = map.keySet();
		
		response.setCharacterEncoding("UTF-8");  	//한글이 포함되어 있을 때
		response.setContentType("text/html; charset=UTF-8");		//html과 같이 utf-8로 변경
		PrintWriter out = response.getWriter(); 	//출력 스트림
		out.print("톰캣을 재시작을 해야지 바뀐 내용이 적용됩니다.");
		out.print("<br>");
		out.print("<h3>학생이름과 점수</h3>");
		//out.print("<table border = '1'><thread><tr>");
		//out.print("<th>학생이름</th><th>점수</th><thread>");
		String str = "<table border = '1'><thread><tr>";
		str += "<th>학생이름</th><th>점수</th><thread>";
		str += "<tbody>";
		for(String item : keyset) {
			str += "<tr><td>"+item+"</td><td>"+map.get(item)+"</td></tr>";
		}
		str += "</tbody></table>";
		out.print(str);
		
		out.print("<a href='index.html'>첫페이지</a>");
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
