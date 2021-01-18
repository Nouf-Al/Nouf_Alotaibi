<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<title>Questions Dashboard</title>
	<link rel="stylesheet" href="/webjars/bootstrap/4.5.0/css/bootstrap.min.css" />
	<script src="/webjars/jquery/3.5.1/jquery.min.js"></script>
	<script src="/webjars/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</head>

<body>
	<div class="container w-75">
		<div class="jumbotron">
			<h4>Questions Dashboard</h4>
			<table class="table bg-light mt-5 mb-5 table-hover table-bordered">
				<tr>
					<th>Questions</th>
					<th>Tags</th>
				</tr>
				<c:forEach items="${questions}" var="question">
					<tr>
						<td><a href="/questions/${question.id}">${question.questionText}</a></td>
						<td>
							<c:forEach items="${question.tags}" var="tag">
							${tag.subject},
							</c:forEach>
						</td>
					</tr>
				</c:forEach>
			</table>

			<a href="/questions/new" class="btn btn-outline-success float-right">+ Question</a>
		</div>
	</div>
</body>

</html>