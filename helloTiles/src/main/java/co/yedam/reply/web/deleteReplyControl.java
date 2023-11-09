package co.yedam.reply.web;


import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Command;
import co.yedam.reply.service.ReplyService;
import co.yedam.reply.serviceImpl.ReplyserviceImpl;

public class deleteReplyControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse res) {
		String delNo = req.getParameter("replyNo");
		ReplyService svc = new ReplyserviceImpl();
		
		Map<String,String> map = new HashMap<>();
		if(svc.delReply(Integer.parseInt(delNo))){
			map.put("retCode", "OK");
		}else {
			map.put("retCode","NG");
		}
		
		Gson gson = new GsonBuilder().create();
		try {
			res.getWriter().print(gson.toJson(map));
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}
}
