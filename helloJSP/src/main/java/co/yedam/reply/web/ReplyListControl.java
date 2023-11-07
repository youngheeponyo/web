package co.yedam.reply.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Command;
import co.yedam.reply.service.ReplyService;
import co.yedam.reply.service.ReplyVO;
import co.yedam.reply.serviceImpl.ReplyserviceImpl;

public class ReplyListControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse res) {
		String bno = req.getParameter("bno");
		ReplyService svc = new ReplyserviceImpl();
		List<ReplyVO> list = svc.replyList(Integer.parseInt(bno));
		
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
		
		String json = gson.toJson(list);
		res.setContentType("text/json;charset=utf-8");
		try {
			res.getWriter().print(json);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
