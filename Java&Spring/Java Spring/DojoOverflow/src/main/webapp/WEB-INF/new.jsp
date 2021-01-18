<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>New Question</title>
  <link rel="stylesheet" href="/webjars/bootstrap/4.5.0/css/bootstrap.min.css" />
  <script src="/webjars/jquery/3.5.1/jquery.min.js"></script>
  <script src="/webjars/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</head>

<body>
	<div class="container w-75">
		<div class="jumbotron">
			<form action="/questions/create" class="mt-3" method="post">
				<label>Question:</label>
				<textarea name="questionText" class="form-control"></textarea>
				<p class="text-danger text-left mb-3">${QestionTextLengthError }</p>
				<br>
		        <input type="text" class="form-control" name="tagsSubjct"/>
   				<p class="text-danger text-left mb-3">${tagsLengthError }</p>
   				<p class="text-danger text-left mb-3">${tagsRegexError }</p>
		        
				<input type="submit" class="btn btn-success btn-block mt-3" value="Send Your Question" />
			<form>
		</div>
	</div>
</body>

</html>