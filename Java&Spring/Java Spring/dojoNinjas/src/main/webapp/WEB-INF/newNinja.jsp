<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>New Ninja</title>
    <link rel="stylesheet" href="/webjars/bootstrap/4.5.0/css/bootstrap.min.css" />
    <script src="/webjars/jquery/3.5.1/jquery.min.js"></script>
    <script src="/webjars/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</head>
<body>
  <div class="container w-50">
    <form action="/ninjas/create" method="post">
    	<label>First Name</label>
	    <input class="form-control" name="firstname" type="text"/>
	    
	    <label>Last Name</label>
	    <input class="form-control" name="lastname" type="text"/>
	    
	    <label>Age</label>
	    <input class="form-control" name="age" type="text"/>
	   	<label>Dojo</label>
	    <select name="dojo" class="form-control">
	    	<c:forEach items="${dojos}" var="dojo">
			   <option value="${dojo.id}">${dojo.name}</option>
			</c:forEach>
	    </select>
	    
	    <input class="btn btn-block btn-dark" type="submit" value="Create new Dojo"/>
    </form>
  </div>
</body>
</html>