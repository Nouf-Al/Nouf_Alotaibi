<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Events Dashboard</title>
<link rel="stylesheet" href="/webjars/bootstrap/4.5.0/css/bootstrap.min.css" />
<script src="/webjars/jquery/3.5.1/jquery.min.js"></script>
<script src="/webjars/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container w-75">
		<div class="jumbotron">
			<div class="row mb-4">
				<div class="col">
					<h4>
						Welcome,
						<c:out value="${user.firstname}" />
						<c:out value="${user.lastname}" />
					</h4>
				</div>

				<div class="col">
					<a class="float-right" href="/logout">Logout</a>

				</div>
			</div>
			<p>Some of the events in your state:</p>
			<table class="table bg-light mb-5 table-hover table-bordered">
				<tr>
					<th>Name</th>
					<th>Date</th>
					<th>Location</th>
					<th>Host</th>
					<th>Action /Status</th>
				</tr>

				<c:forEach items="${events}" var="event">
					<tr>
						<td><a href="/event/${event.id }">${event.name}</a></td>
						<td><fmt:formatDate value="${event.date }" type="date"
								pattern="MMMM dd, yyyy" /></td>
						<td>${event.location}</td>
						<td>${event.user.firstname}</td>
						<td><c:choose>
								<c:when test="${ event.user.id == user.id }">
									<a href="/event/${event.id}/edit" class="btn btn-info">Edit</a>
									<a href="/event/${event.id}/delete"
										class="btn btn-danger float-right">Delete</a>
								</c:when>
								<c:otherwise>
									<c:choose>
										<c:when test="${ event.users.contains(user) }">
											<span>Joined</span>
											<a href="event/${event.id }/join/delete"
												class="btn btn-danger float-right">Cancel</a>
										</c:when>
										<c:otherwise>
											<form class="float-left" action="event/${event.id }/join"
												method="post">
												<input type="submit" class="btn btn-info" value="join" />
											</form>
										</c:otherwise>

									</c:choose>
								</c:otherwise>
							</c:choose></td>
					</tr>
				</c:forEach>
			</table>
			<p>Some of the events in other states:</p>
			<table class="table bg-light mb-5 table-hover table-bordered">
				<tr>
					<th>Name</th>
					<th>Date</th>
					<th>Location</th>
					<td>State</td>
					<th>Host</th>
					<th>Action /Status</th>
				</tr>

				<c:forEach items="${eventsNot}" var="event">
					<tr>
						<td><a href="/event/${event.id }">${event.name}</a></td>
						<td><fmt:formatDate value="${event.date }" type="date"
								pattern="MMMM dd, yyyy" /></td>
						<td>${event.location}</td>
						<td>${event.state}</td>
						<td>${event.user.firstname}</td>
						<td><c:choose>
								<c:when test="${ event.user.id == user.id }">
									<a href="/event/${event.id}/edit" class="btn btn-info">Edit</a>
									<a href="/event/${event.id}/delete"
										class="btn btn-danger float-right">Delete</a>
								</c:when>
								<c:otherwise>
									<c:choose>
										<c:when test="${ event.users.contains(user) }">
											<span>Joined</span>
											<a href="event/${event.id }/join/delete"
												class="btn btn-danger float-right">Cancel</a>
										</c:when>
										<c:otherwise>
											<form class="float-left" action="event/${event.id }/join"
												method="post">
												<input type="submit" class="btn btn-info" value="join" />
											</form>
										</c:otherwise>

									</c:choose>
								</c:otherwise>
							</c:choose></td>
					</tr>
				</c:forEach>
			</table>

			<form:form action="/event/create" class="mt-3" method="post"
				modelAttribute="event">
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
						<form:label path="">State:</form:label>
						<select name="state" class="form-control">
							<option value="CA">CA</option>
							<option value="NY">NY</option>
							<option value="SA">SA</option>
						</select>
					</div>
				</div>
				<input type="hidden" name="user" value="${user.id }" />
				<input type="submit" class="btn btn-outline-danger btn-block mt-3"
					value="Create new event" />
			</form:form>
		</div>
	</div>
</body>
</html>