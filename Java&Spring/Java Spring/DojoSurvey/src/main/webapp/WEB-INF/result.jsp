<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Dojo Survey</title>
    <link rel="stylesheet" href="/webjars/bootstrap/4.5.0/css/bootstrap.min.css" />
    <script src="/webjars/jquery/3.5.1/jquery.min.js"></script>
    <script src="/webjars/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container w-50 mx-auto justify-content-center border border-dark p-3 my-4">
		<p class="font-weight-bold">Submitted Information</p>
		<div class="row">
			<div class="col">
				<p>Name:</p>
				<p>Dojo Location:</p>
				<p>Favorite Language:</p>
				<p>Comment:</p>
			</div>

			<div class="col">
				<p><c:out value="${name }" /></p>
				<p><c:out value="${location }" /></p>
				<p><c:out value="${language }" /></p>
				<p><c:out value="${comment }" /></p>
			</div>
		</div>
		<a href="/"><button class="btn btn-dark btn-block"> Go Back </button></a>

	</div>
</body>
</html>