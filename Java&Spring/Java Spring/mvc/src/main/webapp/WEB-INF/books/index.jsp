<%@ page language="java" contentType="text/html; charset=windows-1256"
	pageEncoding="windows-1256"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/webjars/bootstrap/4.5.0/css/bootstrap.min.css" />
<script src="/webjars/jquery/3.5.1/jquery.min.js"></script>
<script src="/webjars/bootstrap/4.5.0/js/bootstrap.min.js"></script>
<meta charset="windows-1256">
<title>Insert title here</title>
</head>
<body>
	<h1>All Books</h1>
	<table class="table">
		<thead>
			<tr>
				<th>Title</th>
				<th>Description</th>
				<th>Language</th>
				<th>Number of Pages</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${books}" var="book">
				<tr>
					<td><a href="/books/${book.id}"><c:out value="${book.title}" /></a></td>
					<td><c:out value="${book.description}" /></td>
					<td><c:out value="${book.language}" /></td>
					<td><c:out value="${book.numberOfPages}" /></td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
	<a href="/books/new">New Book</a>
</body>
</html>