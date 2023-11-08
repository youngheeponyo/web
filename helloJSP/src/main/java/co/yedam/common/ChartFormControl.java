package co.yedam.common;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ChartFormControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse res) {
		
		try {
			req.getRequestDispatcher("WEB-INF/main/chart.jsp").forward(req, res);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
