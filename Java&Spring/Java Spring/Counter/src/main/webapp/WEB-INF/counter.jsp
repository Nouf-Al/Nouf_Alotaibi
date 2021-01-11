<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Counter</title>
    <link rel="stylesheet" href="/webjars/bootstrap/4.5.0/css/bootstrap.min.css" />
    <script src="/webjars/jquery/3.5.1/jquery.min.js"></script>
    <script src="/webjars/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</head>
<body>
  <div class="container text-center">
    <p>You have visited <a href="/">http://localhost:8080/</a> <c:out value="${ count }"/> times!</p>
    <p><a href="/">Test another visit?</a></p>
    <a href="/reset"><button class="btn btn-dark">Reset</button></a>
    <a href="/increment"><button class="btn btn-danger">+2</button></a>
  </div>
</body>
</html>