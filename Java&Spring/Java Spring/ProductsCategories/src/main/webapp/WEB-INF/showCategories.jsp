<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Category Page</title>
<link rel="stylesheet"
	href="/webjars/bootstrap/4.5.0/css/bootstrap.min.css" />
<script src="/webjars/jquery/3.5.1/jquery.min.js"></script>
<script src="/webjars/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container w-50">
		<h2>${category.name }</h2>
		<div class="row">
			<div class="col">
				<ul>
					<c:forEach items="${category.products}" var="product">
						<li>${product.name}</li>
					</c:forEach>
					
				</ul>
			</div>

			<div class="col">
				<form action="/category/add" method="post">
					<label>Add Product:</label> 
					<select name="product"
						class="form-control">
						<c:forEach items="${products}" var="product">
							<option value="${product.id}">${product.name}</option>
						</c:forEach>
					</select>
					<input type="hidden" name="category" value="${category.id}" />
					
					<input type="submit" class="btn btn-dark"/>
				</form>
			</div>
		</div>


	</div>
</body>
</html>