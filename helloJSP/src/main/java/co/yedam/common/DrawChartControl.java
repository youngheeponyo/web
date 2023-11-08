package co.yedam.common;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.reply.service.ReplyService;
import co.yedam.reply.serviceImpl.ReplyserviceImpl;

public class DrawChartControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse res) {
		//json 데이터 넘겨주기[작성자, 건수]
		ReplyService svc = new ReplyserviceImpl();
		List<Map<String,Object>> list = svc.getReplyCountPerWriter();
		
		Gson gson = new GsonBuilder().create();
		try {
			res.getWriter().print(gson.toJson(list));
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		
	}

}
