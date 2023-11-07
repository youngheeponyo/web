package co.yedam.reply.web;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Command;
import co.yedam.reply.service.ReplyService;
import co.yedam.reply.serviceImpl.ReplyserviceImpl;

public class deleteReplyControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse res) {
		String delNo = req.getParameter("replyNo");
		
		ReplyService svc = new ReplyserviceImpl();
		if(svc.delReply(Integer.parseInt(delNo))) {
			return ;
		}
	}

}
