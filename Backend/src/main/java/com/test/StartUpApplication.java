package com.test;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;



@SpringBootApplication
public class StartUpApplication {
	

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		SpringApplication.run(StartUpApplication.class, args);
		}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/loginDetails").allowedOrigins("http://localhost:3000");
			}
		};
	}
}
