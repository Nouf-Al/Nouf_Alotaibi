<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>    

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Languages</title>
    <link rel="stylesheet" href="/webjars/bootstrap/4.5.0/css/bootstrap.min.css" />
    <script src="/webjars/jquery/3.5.1/jquery.min.js"></script>
    <script src="/webjars/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container w-50 mx-auto my-5">
		<div class="card">
			<div class="card-header">
				<a class="float-right btn btn-link" href="/languages">Dashboard</a>
				<h3>
					<c:out value="${language.name}" />
				</h3>
			</div>
			<div class="card-body">
				<p>
					Creator:
					<c:out value="${language.creator}" />
				</p>
				<p>
					Version:
					<c:out value="${language.currentVersion}" />
				</p>

			</div>
			<div class="card-footer">
				<a class="btn btn-primary" href="/languages/${language.id}/edit">Edit</a>
				<a class="btn btn-danger" href="/languages/${language.id}/delete">Delete</a>
			</div>
		</div>
	</div>
</body>
</html>