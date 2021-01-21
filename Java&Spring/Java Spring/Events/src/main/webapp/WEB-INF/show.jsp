<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<title>${event.name }</title>
<link rel="stylesheet"
	href="/webjars/bootstrap/4.5.0/css/bootstrap.min.css" />
<script src="/webjars/jquery/3.5.1/jquery.min.js"></script>
<script src="/webjars/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</head>

<body>
	<div class="container w-75">
		<div class="jumbotron">
			<div class="row mb-4">
				<div class="col">
					<h4>${event.name }</h4>
					<p>Host: ${event.user.firstname} ${event.user.lastname}</p>
					<p>Date: <fmt:formatDate value="${event.date }" type="date" pattern="MMMM dd, yyyy"/></p>
					<p>Location: ${event.location }, ${event.state }</p>
					<p>People who are attending this event: ${count }</p>

					<table class="table bg-light mb-5 table-hover table-bordered">
						<tr>
							<th>Name</th>
							<th>Location</th>
						</tr>
						<c:forEach items="${joiners}" var="joiner">
							<c:if test="${event.id == joiner.event.id }">
							<tr>
							
								<td>${joiner.user.firstname }</td>
								<td>${joiner.event.location }</td>
							</tr>
							</c:if>
						</c:forEach>
					</table>
				</div>

				<div class="col">
					<h4>Message Wall</h4>
					<div style=" height: 200px; border: 0.1px solid; overflow: overlay; ">
						<c:forEach items="${comments}" var="comment">
							<p>${comment.user.firstname} ${comment.user.lastname}: ${comment.text}</p>
							<p>********************************************</p>
						</c:forEach>
					</div>
					<form:form action="/comment/create" class="mt-3" method="post" modelAttribute="comment">
						<div class="row">
							<div class="col">
								<form:label path="text">Add Comment:</form:label>
								<form:textarea path="text" class="form-control" />
								<form:errors path="text" class="text-danger" />
							</div>
						</div>
						<input type="hidden" name="eventId" value="${event.id }"/>
						<input type="hidden" name="event" value="${event.id}"/>
						<input type="hidden" name="user" value="${user.id}"/>
						<input type="submit" class="btn btn-outline-danger btn-block mt-3"
							value="Add Comment" />
					</form:form>

				</div>
			</div>
		</div>
	</div>
</body>

</html>