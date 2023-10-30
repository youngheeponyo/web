package org.yedam.service;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
public class BookVO {
	private String book_code;
	private String book_title;
	private String book_author;
	private String book_press;
	private int book_price;
}
