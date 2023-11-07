package co.yedam.reply.web;

import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Command;
import co.yedam.reply.service.ReplyService;
import co.yedam.reply.service.ReplyVO;
import co.yedam.reply.serviceImpl.ReplyserviceImpl;

public class AddReplyControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse res) {
		String bno = req.getParameter("bno");
		String reply = req.getParameter("reply");
		String replyer = req.getParameter("replyer");
		
		ReplyVO vo = new ReplyVO();
		vo.setBoardNo(Integer.parseInt(bno));
		vo.setReply(reply);
		vo.setReplyer(replyer);
		vo.setReplyDate(new Date());
		
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
		Map<String,Object> map = new HashMap<>();
		
		ReplyService svc = new ReplyserviceImpl();
		if(svc.addReply(vo)) {
			map.put("retCode", "OK");
			map.put("vo", vo);
		}else {
			map.put("retCode", "NG");
		}
		res.setContentType("text/json;charset=utf-8");
		
		try {
			res.getWriter().print(gson.toJson(map));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
