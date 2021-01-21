<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<title>Events</title>
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
				<h3>Edit ${event.name }</h3>
					<form:form action="/event/${event.id}/editEvent" class="mt-3" method="post"
						modelAttribute="event">
						    <input type="hidden" name="_method" value="put">
						
						<div class="row">
							<div class="col">
								<form:label path="name">Name:</form:label>
								<form:input path="name" class="form-control" />
								<form:errors path="name" class="text-danger" />
							</div>
						</div>


						<div class="row">
							<div class="col">
								<form:label path="date">Date:</form:label>
								<form:input type="date" path="date" class="form-control" />
								<form:errors path="date" class="text-danger" />
							</div>
						</div>

						<div class="row">
							<div class="col-6">
								<form:label path="location">Location:</form:label>
								<form:input path="location" class="form-control" />
								<form:errors path="location" class="text-danger" />
							</div>

							<div class="col-6">
								<label>State:</label>
								<select name="state" class="form-control">
									<option value="ca">CA</option>
									<option value="ny">NY</option>
									<option value="sa">SA</option>
								</select>
							</div>
						</div>
						<input type="hidden" name="user" value="${event.user.id }" />
						<input type="submit" class="btn btn-outline-danger btn-block mt-3"
							value="Update an event" />
					</form:form>
				</div>
			</div>
		</div>
	</div>
</body>

</html>