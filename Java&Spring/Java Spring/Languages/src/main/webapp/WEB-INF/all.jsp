<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
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
	<div class="container my-5 mx-auto">
		<div class="row">
			<div class="col">
				<table class="table my-4 table-border table-hover table-striped">
					<tr>
						<th>Name</th>
						<th>Creator</th>
						<th>Version</th>
						<th>Actions</th>
					</tr>
					<c:forEach items="${languages }" var="language">
						<tr>
							<td><a href="/languages/${language.id}"><c:out
										value="${language.name}" /></a></td>
							<td><c:out value="${language.creator}" /></td>
							<td><c:out value="${language.currentVersion}" /></td>
							<td><a class="btn btn-danger" href="/languages/${language.id}/delete">Delete</a> |
								<a class="btn btn-primary" href="/languages/${language.id}/edit">Edit</a></td>
						</tr>
					</c:forEach>
				</table>
			</div>

			<div class="col-4">

				<h3 class="text-center">New Language</h3>
				<form:form action="/languages" method="post"
					modelAttribute="newLanguage" class="p-3">
					<p>
						<form:label path="name">Name</form:label>
						<form:input path="name" class="form-control" />
						<form:errors path="name" class="text-danger text-left" />
					</p>
					<p>
						<form:label path="creator">Creator</form:label>
						<form:input path="creator" class="form-control" />
						<form:errors path="creator" class="text-danger text-left" />

					</p>
					<p>
						<form:label path="currentVersion">Version</form:label>
						<form:input type="number" path="currentVersion"
							class="form-control" />
						<form:errors path="currentVersion" class="text-danger text-left" />
					</p>
					<input type="submit" value="Submit" class="btn btn-dark btn-block" />
				</form:form>

			</div>
		</div>
	</div>
</body>
</html>