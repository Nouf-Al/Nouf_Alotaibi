<%@ page language="java" contentType="text/html; charset=windows-1256" pageEncoding="windows-1256" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>  
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>New Song</title>
    <link rel="stylesheet" href="/webjars/bootstrap/4.5.0/css/bootstrap.min.css" />
    <script src="/webjars/jquery/3.5.1/jquery.min.js"></script>
    <script src="/webjars/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <link rel="stylesheet" type="text/css" href="/style.css">
    <meta charset="windows-1256">
</head>
<body class="p-5">
    <div class="container w-50 mx-auto  rounded shadow dash-container p-5">
        <a class="btn btn-dark mr-2" href="/dashboard">Dashboard</a>
        <form:form action="/songs/new" method="post" modelAttribute="Song" class="mt-5">
            <div class="row mt-4">
                <div class="col-2">
                    <form:label path="name">Name</form:label>
                </div>
                <div class="col">
                    <form:input path="name" class="form-control"/>
                    <form:errors path="name" class="text-danger"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-2">
                    <form:label path="artist">Artist</form:label>
                </div>
                <div class="col">
                    <form:input path="artist" class="form-control"/>
                    <form:errors path="artist" class="text-danger"/>
                </div>
            </div>	
            <div class="row mt-4">
                <div class="col-2">
                    <form:label path="rating">Rating</form:label>
                </div>
                <div class="col">
                    <form:input type="number" path="rating" class="form-control"/>
                    <form:errors path="rating" class="text-danger"/>
                </div>
            </div>	
            <div class="row mt-4">
                <div class="col">
                    <input type="submit" value="Add" class="btn btn-dark btn-block">
                </div>
            </div>
        </form:form>
    </div>
</body>
</html>