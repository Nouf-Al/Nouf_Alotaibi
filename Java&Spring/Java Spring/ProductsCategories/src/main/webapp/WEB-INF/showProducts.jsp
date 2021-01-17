<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Product Page</title>
<link rel="stylesheet"
	href="/webjars/bootstrap/4.5.0/css/bootstrap.min.css" />
<script src="/webjars/jquery/3.5.1/jquery.min.js"></script>
<script src="/webjars/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container w-50">
		<h2>${product.name }</h2>
		<div class="row">
			<div class="col">
				<ul>
					<c:forEach items="${product.categories}" var="category">
						<li>${category.name}</li>
					</c:forEach>
					
				</ul>
			</div>

			<div class="col">
				<form action="/product/add" method="post">
					<label>Add Category:</label> 
					<select name="category"
						class="form-control">
						<c:forEach items="${categories}" var="category">
							<option value="${category.id}">${category.name}</option>
						</c:forEach>
					</select>
					<input type="hidden" name="product" value="${product.id}" />
					
					<input type="submit" class="btn btn-dark"/>
				</form>
			</div>
		</div>


	</div>
</body>
</html>