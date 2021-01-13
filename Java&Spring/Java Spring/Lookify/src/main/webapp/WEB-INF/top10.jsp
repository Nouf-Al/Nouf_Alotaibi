<%@ page language="java" contentType="text/html; charset=windows-1256" pageEncoding="windows-1256" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Top 10</title>
    <link rel="stylesheet" href="/webjars/bootstrap/4.5.0/css/bootstrap.min.css" />
    <script src="/webjars/jquery/3.5.1/jquery.min.js"></script>
    <script src="/webjars/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <link rel="stylesheet" type="text/css" href="/style.css">
    <meta charset="windows-1256">
</head>
<body class="p-5">
    <div class="container w-75 mx-auto rounded shadow dash-container p-3">
        <div class="row">
            <div class="col">
                <a class="btn btn-dark float-left mr-2" href="/dashboard">Dashboard</a>
            </div>
        </div>
        <table class="table bg-light mt-5">
            <tr>
                <th>Name</th>
                <th>Rating</th>
                <th>Artist</th>
            </tr>
            <c:forEach items="${songs }" var="song">
                <tr>
                    <td><a href="/songs/${song.id}"><c:out value="${song.name}" /></a></td>
                    <td><c:out value="${song.rating}" /></td>
                    <td><c:out value="${song.artist}" /></td>
                </tr>
            </c:forEach>
        </table>
    </div>
</body>
</html>