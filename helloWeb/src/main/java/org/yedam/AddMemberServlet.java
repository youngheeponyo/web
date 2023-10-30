package org.yedam;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.yedam.serivce.Impl.MemberServiceImpl;
import org.yedam.service.MemberService;
import org.yedam.service.MemberVO;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;


@WebServlet("/AddMemberServlet.html")
public class AddMemberServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddMemberServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// ?mid=M009&pass=9999&name=Kim,phone=010-9887-2452		//서블릿 주소에서는 이런 방식으로 데이터를 넘겨야함
		// (mid,pass,name,phone){mid...}
		String mid = request.getParameter("mid");
		String pass = request.getParameter("pass");
		String name = request.getParameter("name");
		String phone  = request.getParameter("phone");
		MemberVO vo = new MemberVO(mid,pass,name,phone);
		
		MemberService svc = new MemberServiceImpl();
		PrintWriter out = response.getWriter();
		
		Gson gson = new GsonBuilder().create();
		
		
		//Map
		Map<String,Object> map = new HashMap<>();
		
		if(svc.addMember(vo)) {
			//{"retCode":"OK"}
			map.put("retCode","OK");
			map.put("vo",vo);
		}else{
			//{"retCode":"NG"}
			map.put("retCode","NG");
			map.put("vo",vo.getMid());
		}
		String json = gson.toJson(map);
		out.print(json);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
