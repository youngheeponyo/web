package org.yedam.serivce.Impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

import org.yedam.common.DataSource;
import org.yedam.service.MemberService;
import org.yedam.service.MemberVO;

public class MemberServiceImpl implements MemberService{
	
	private DataSource dao = DataSource.getInstance();
	private Connection conn;
	private PreparedStatement psmt;
	
	@Override
	public List<MemberVO> memberList() {
		List<MemberVO> list = new ArrayList<>();
		MemberVO vo;
		String sql = "SELECT * FROM MEMBER";
		try {
			conn = dao.getConnection();
			psmt = conn.prepareStatement(sql);
			ResultSet rs = psmt.executeQuery();
			
			while(rs.next()) {
				vo = new MemberVO();
				vo.setMid(rs.getString("mid"));
				vo.setPass(rs.getString("pass"));
				vo.setName(rs.getString("name"));
				vo.setPhone(rs.getString("phone"));
				list.add(vo);
			}
			rs.close();
		}catch(SQLException e){
			e.printStackTrace();
		}finally {
			try {
				if(psmt != null) psmt.close();
				if(conn != null) conn.close();
			}catch(SQLException e) {
				e.printStackTrace();
			}
		}
		return list;
	}
	@Override
	public boolean addMember(MemberVO vo) {
		String sql = "INSERT INTO MEMBER VALUES(?,?,?,?)";
		conn = dao.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1,vo.getMid());
			psmt.setString(2,vo.getPass());
			psmt.setString(3,vo.getName());
			psmt.setString(4,vo.getPhone());
			
			int r = psmt.executeUpdate();	//반환된 값은 데이터처리 건수
			if(r==1) {
				return true;
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			try {
				if(psmt != null) psmt.close();
				if(conn != null) conn.close();
			}catch(SQLException e) {
				e.printStackTrace();
			}
		}
		return false;
	}
	
	@Override
	public boolean modifyMember(MemberVO vo) {
		String sql = "UPDATE MEMBER SET PASS=?,NAME=?,PHONE=? WHERE MID=?";
		conn = dao.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1,vo.getPass());
			psmt.setString(2,vo.getName());
			psmt.setString(3,vo.getPhone());
			psmt.setString(4, vo.getMid());
			
			int r = psmt.executeUpdate();
			if(r==1) {
				return true;
			}
		}catch (SQLException e) {
			e.printStackTrace();
		}finally {
			try {
				if(psmt != null) psmt.close();
				if(conn != null) conn.close();
			}catch(SQLException e) {
				e.printStackTrace();
			}
		}
		return false;
	}
}
