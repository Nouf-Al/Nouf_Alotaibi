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
		<form action="/survey" method="post" class="">
			<label>Name</label>
			<input type="text" name="name" class="form-control my-2"/>
			<label>Dojo Location</label>
			<select name="location" class="form-control my-2">
				<option value="Riyadh">Riyadh</option>
				<option value="Jeddah">Jeddah</option>
				<option value="Abha">Abha</option>
			</select> 
			<label>Favorite Language</label>
			<select name="language" class="form-control my-2">
				<option value="Python">Python</option>
				<option value="Java">Java</option>
				<option value="JavaScript">JavaScript</option>
			</select>
			<label>Comment (optional)</label>
			<textarea name="comment" class="form-control my-2"></textarea>
			<input type="submit" class="btn btn-dark btn-block" value="Send" />
		</form>
	</div>
</body>
</html>