<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>${question.questionText}</title>
  <link rel="stylesheet" href="/webjars/bootstrap/4.5.0/css/bootstrap.min.css" />
  <script src="/webjars/jquery/3.5.1/jquery.min.js"></script>
  <script src="/webjars/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</head>

<body>
  <div class="container w-75">
		<div class="jumbotron">
			<div class="card mb-5">
				<div class="card-body">${question.questionText}</div>
				<div class="card-footer">
					<c:forEach items="${question.tags}" var="tag">
										<a href="#" class="badge badge-primary">${tag.subject}</a>
					
					</c:forEach>
				</div>
			</div>

			<div class="card mt-2">
				<div class="card-header bg-dark text-light">Answers</div>

				<c:forEach items="${question.answers}" var="answer">
					<div class="card-body">${answer.answerText}</div>
					<div class="card-footer">${answer.createdAt}</div>
				</c:forEach>
			</div>
		</div>


		<div class="card mt-3 mb-5">
			<div class="card-header">Do you have an answer?</div>
			<div class="card-body">
				<form:form action="/answers/create" class="mt-3" method="post" modelAttribute="answer">
					<form:label path="answerText">Answer:</form:label>
					<form:textarea path="answerText" class="form-control" />
					<p class="text-danger text-left" >${error }</p>
					<form:hidden path="question" value="${question.id }" />
					<input type="hidden" name="questionId" value="${question.id }"/>
					<input type="submit" class="btn btn-outline-danger btn-block mt-2" value="Send Your Answer" />
				</form:form>
			</div>
		</div>
	</div>
</body>

</html>