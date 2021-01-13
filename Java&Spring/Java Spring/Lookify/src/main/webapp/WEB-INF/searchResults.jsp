<%@ page language="java" contentType="text/html; charset=windows-1256" pageEncoding="windows-1256" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Results</title>
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
                <a class="btn btn-dark mr-2" href="/dashboard">Dashboard</a>
            </div>
            <div class="col">
                <form action="/search" method="POST" class=" d-flex">
                    <input type="search" class="form-control mr-2" name="artist" placeholder="Search by artist">
                    <input type="submit" class="btn btn-dark" value="Search">
                </form>
            </div>
        </div>
        <c:if test="${not noResults}">
            <c:if test="${not isEmpty}">
                <div class="h5 text-light p-0 mt-5">Songs By Artist: <c:out value="${searchQ}"/></div>
            </c:if>
        </c:if>
        <!-- <div class="h3 text-light p-0 m-0">${noResults? "Sorry we don't have any results." :" "}</div> -->
        <c:if test="${noResults}">
            <div class="no-results">
                <p>Sorry we don't have any results.</p>
            </div>
        </c:if>

        <c:if test="${isEmpty}">
            <div class="no-results">
                <p>You have to write an artist name.</p>
            </div>
        </c:if>

        <c:if test="${not noResults}">
            <c:if test="${not isEmpty}">
                <table class="table bg-light mt-5">
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Action</th>
                    </tr>

                    <c:forEach items="${results }" var="result">
                        <tr>
                            <td><a href="/songs/${result.id}">
                                    <c:out value="${result.name}" />
                                </a></td>
                            <td>
                                <c:out value="${result.rating}" />
                            </td>
                            <td><a class="btn btn-danger" href="/songs/${result.id}/delete">Delete</a></td>
                        </tr>
                    </c:forEach>
            </c:if>
        </c:if>
    </div>
</body>
</html>