package co.yedam.studuent.serviceImpl;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import co.yedam.common.DataSource;
import co.yedam.studuent.service.StudentVO;

public class StudentDAO {

	DataSource dao = DataSource.getInstance();
	Connection conn;
	PreparedStatement psmt;
	ResultSet rs;

	void close() {
		try {
			if (rs != null)
				rs.close();
			if (conn != null)
				conn.close();
			if (psmt != null)
				psmt.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

	public int insert(StudentVO vo) {
		String sql = "INSERT INTO STUDENT(STUDENT_ID,STUDENT_NAME,STUDENT_PASSWORD,STUDENT_DEPT,STUDENT_BIRTHDAY) VALUES(?,?,?,?,?)";
		conn = dao.getConnection();
		System.out.println(sdf.format(vo.getStudentBirthday()));
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getStudentId());
			psmt.setString(2, vo.getStudentName());
			psmt.setString(3, vo.getStudentPassword());
			psmt.setString(4, vo.getStudentDept());
			psmt.setString(5, sdf.format(vo.getStudentBirthday()));
			int r = psmt.executeUpdate();
			return r;
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return 0; // 처리된 건수가 없다는 뜻:에러

	}
	
	public int delete(String sid) {
		String sql = "DELETE FROM STUDENT WHERE STUDENT_ID=?";
		conn = dao.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1,sid);
			int r = psmt.executeUpdate();
			return r;
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return 0;
	}
	
	public int update(StudentVO vo) {
		int r = 0;
		String sql = "UPDATE STUDENT SET STUDENT_NAME=?,STUDENT_PASSWORD=?,STUDENT_DEPT=?,STUDENT_BIRTHDAY =?WHERE STUDENT_ID = ?";
		conn = dao.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1,vo.getStudentName());
			psmt.setString(2,vo.getStudentPassword());
			psmt.setString(3,vo.getStudentDept());
			psmt.setString(4,sdf.format(vo.getStudentBirthday()));
			psmt.setString(5, vo.getStudentId());
			r = psmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return r;
	}
	List<StudentVO> list() {
			List<StudentVO> list = new ArrayList<>();
			String sql = "SELECT * FROM STUDENT ORDER BY STUDENT_BIRTHDAY";
			conn = dao.getConnection();
			try {
				psmt = conn.prepareStatement(sql);
				rs = psmt.executeQuery();
				while(rs.next()) {
					StudentVO vo = new StudentVO();
					vo.setStudentId(rs.getString("student_id"));
					vo.setStudentName(rs.getString("student_name"));
					vo.setStudentPassword(rs.getString("student_password"));
					vo.setStudentDept(rs.getString("student_dept"));
					vo.setStudentBirthday(rs.getDate("student_birthday"));
					list.add(vo);
					}
			} catch (SQLException e) {
				e.printStackTrace();
			}
			return list;
	}
	
	public StudentVO select(String sid) {
		String sql = "SELECT * FROM STUDENT WHERE STUDENT_ID = ?";
		conn = dao.getConnection();
		StudentVO vo = new StudentVO();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, sid);
			rs = psmt.executeQuery();
			while(rs.next()) {
				vo.setStudentId(rs.getString("student_id"));
				vo.setStudentName(rs.getString("student_name"));
				vo.setStudentPassword(rs.getString("student_password"));
				vo.setStudentDept(rs.getString("student_dept"));
				vo.setStudentBirthday(rs.getDate("student_birthday"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return vo;
	}
	
}
