package com.test.model;

import org.springframework.stereotype.Component;

@Component
public class ResponseModel {

	private String error;

	public String getError() {
		return error;
	}

	public void setError(String error) {
		this.error = error;
	}

	public ResponseModel(String error) {
		super();
		this.error = error;
	}

	public ResponseModel() {
		super();
	}
	
}
