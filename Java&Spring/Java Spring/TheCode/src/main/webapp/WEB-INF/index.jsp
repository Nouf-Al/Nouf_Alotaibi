<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>The Code</title>
<link rel="stylesheet"
	href="/webjars/bootstrap/4.5.0/css/bootstrap.min.css" />
<script src="/webjars/jquery/3.5.1/jquery.min.js"></script>
<script src="/webjars/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container text-center m-5">
		<form action="/check" method="post">
			<p class="text-danger"><c:out value="${error}"/></p>
			<p>What is the code?</p>
			<input class="form-control w-50 mx-auto my-4" type="text" name="code" />
			<input class="btn btn-success w-50" type="submit" value="Try Code" />
		</form>
	</div>
</body>
</html>