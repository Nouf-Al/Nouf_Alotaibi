<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Ninja Gold Game</title>
    <link rel="stylesheet" href="/webjars/bootstrap/4.5.0/css/bootstrap.min.css" />
    <script src="/webjars/jquery/3.5.1/jquery.min.js"></script>
    <script src="/webjars/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <link rel="stylesheet" type="text/css" href="/style.css">       
</head>
<body>
	<div class="container m-5">
		<p>
			Your Gold: <span>${gold }</span>
		</p>
		<div class="forms">
			<div class="block-form">
				<form action="/farm" method="post">
					<h5>Farm</h5>
					<p>(earns 10-20 gold)</p>
					<input type="submit" class="btn btn-danger btn-block" value="Find Gold!"/>
				</form>
			</div>
			<div class="block-form">
				<form action="/cave" method="post">
					<h5>Cave</h5>
					<p>(earns 5-10 gold)</p>
					<input type="submit" class="btn btn-danger btn-block" value="Find Gold!"/>
				</form>
			</div>
			<div class="block-form">
				<form action="/house" method="post">
					<h5>House</h5>
					<p>(earns 2-5 gold)</p>
					<input type="submit" class="btn btn-danger btn-block" value="Find Gold!"/>
				</form>
			</div>
			<div class="block-form">
				<form action="/casino" method="post">
					<h5>Casino</h5>
					<p>(earns/takes 0-50 gold)</p>
					<input type="submit" class="btn btn-danger btn-block" value="Find Gold!"/>
				</form>
			</div>
		</div>
		<div class="activity">
			<p>Activities:</p>
			<div class="activity-block">
			${res }
			</div>
		</div>
	</div>
</body>
</html>