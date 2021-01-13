<%@ page language="java" contentType="text/html; charset=windows-1256" pageEncoding="windows-1256" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title><c:out value="${song.name}"/></title>
    <link rel="stylesheet" href="/webjars/bootstrap/4.5.0/css/bootstrap.min.css" />
    <script src="/webjars/jquery/3.5.1/jquery.min.js"></script>
    <script src="/webjars/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <link rel="stylesheet" type="text/css" href="/style.css">
    <meta charset="windows-1256">
</head>
<body class="p-5">
    <div class="container w-50 mx-auto rounded shadow dash-container p-5">
        <a class="btn btn-dark mb-5" href="/dashboard">Dashboard</a>
        <div class="row rounded text-light">
            <div class="col">
                <p>Name:</p>
                <p>Artist:</p>
                <p>Rating(1-10):</p>
            </div>
            <div class="col">
                <p><c:out value="${song.name}"/></p>
                <p><c:out value="${song.artist}"/></p>
                <p><c:out value="${song.rating}"/></p>
            </div>
        </div>
        <a class="btn btn-danger" href="/songs/${song.id}/delete">Delete</a>
    </div>
</body>
</html>