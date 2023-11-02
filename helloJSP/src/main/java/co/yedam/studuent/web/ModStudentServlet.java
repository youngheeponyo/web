package co.yedam.studuent.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.studuent.service.StudentService;
import co.yedam.studuent.service.StudentVO;
import co.yedam.studuent.serviceImpl.StudentServiceImpl;

@WebServlet("/editStudent.do")
public class ModStudentServlet extends HttpServlet{
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		req.setCharacterEncoding("utf-8");
		
		StudentVO vo = new StudentVO();
		
		StudentService svc = new StudentServiceImpl();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		
		vo.setStudentId(req.getParameter("sid"));
		vo.setStudentName(req.getParameter("name"));
		vo.setStudentPassword(req.getParameter("pwd"));
		vo.setStudentDept(req.getParameter("dept"));
		try {
			vo.setStudentBirthday(sdf.parse(req.getParameter("birth")));
		} catch (ParseException e) {
			e.printStackTrace();
		}
		
		Map<String,Object> map = new HashMap<>();
		if(svc.editStudent(vo)) {
			map.put("retCode","OK");
			map.put("vo", vo);
		}else {
			map.put("retCode","NG");
			map.put("vo", vo);
		}
		resp.setContentType("text/json;charset=utf-8");
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
		String json = gson.toJson(map);

		PrintWriter out = resp.getWriter();
		out.println(json);

	}
}
