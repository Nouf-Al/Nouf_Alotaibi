<%@ page isErrorPage="true"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Edit Language</title>
<link rel="stylesheet"
	href="/webjars/bootstrap/4.5.0/css/bootstrap.min.css" />
<script src="/webjars/jquery/3.5.1/jquery.min.js"></script>
<script src="/webjars/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container w-50 mx-auto my-5">
		<div class="card">
			<div class="card-header">
				<h3 class="float-left">Edit Language</h3>
				<a class="float-right btn btn-link" href="/languages">Dashboard</a> 
				<a class="float-right btn btn-link mr-2" href="/languages/${language.id}/delete">Delete</a>
			</div>
			<div class="card-body">
				<form:form action="/languages/${language.id}" method="post"
					modelAttribute="language">
					<input type="hidden" name="_method" value="put">
					<p>
						<form:label path="name">Name</form:label>
						<form:input path="name" class="form-control"/>
						<form:errors path="name" class="text-danger"/>						
					</p>
					<p>
						<form:label path="creator">Creator</form:label>
						<form:input path="creator" class="form-control"/>
						<form:errors path="creator" class="text-danger"/>
					</p>
					<p>
						<form:label path="currentVersion">Version</form:label>
						<form:input type="number" path="currentVersion" class="form-control"/>
						<form:errors path="currentVersion" class="text-danger"/>
					</p>

					<input type="submit" value="Edit" class="btn btn-dark btn-block" />
				</form:form>
			</div>
		</div>
	</div>
</body>
</html>