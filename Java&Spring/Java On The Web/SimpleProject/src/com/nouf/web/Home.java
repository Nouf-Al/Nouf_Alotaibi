package com.nouf.web;
import java.io.PrintWriter;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


	/**
 * Servlet implementation class Home
 */
@WebServlet("/Home")
public class Home extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Home() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String firstname = request.getParameter("firstname") == null ? "Unknown" : request.getParameter("firstname");
		String lastname = request.getParameter("lastname") == null ? "Unknown" : request.getParameter("lastname");
		String language = request.getParameter("language") == null ? "Unknown" : request.getParameter("language");
		String hometown = request.getParameter("hometown") == null ? "Unknown" : request.getParameter("hometown");

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.write("<h1>Welcome, " + firstname +" "+ lastname + "</h1>");
        out.write("<h4>Your favorite language is: " + language + "</h4>");
        out.write("<h4>Your hometown is: " + hometown + "</h4>");


//        out.write("<h4>Hello World, from " + userName + "</h4>");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
