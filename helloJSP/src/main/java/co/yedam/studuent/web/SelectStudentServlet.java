package co.yedam.studuent.web;

import java.io.IOException;
import java.io.PrintWriter;

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

@WebServlet("/SelectStudentServlet.do")
public class SelectStudentServlet extends HttpServlet{
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setCharacterEncoding("utf-8");
		resp.setContentType("text/json;charset=utf-8");	

		
		String sid = req.getParameter("sid");
		StudentService svc = new StudentServiceImpl();
		StudentVO vo = new StudentVO();
		vo = svc.getStudent(sid);

		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
		String json = gson.toJson(vo);
		
		
		PrintWriter out = resp.getWriter();
		out.println(json);
	}
}
