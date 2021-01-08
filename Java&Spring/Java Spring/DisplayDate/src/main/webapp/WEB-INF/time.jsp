  
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "fmt" uri = "http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>


<!DOCTYPE html>
<html>
	<head>
		<spring:url value="/style.css" var="mainCss" />
        <link href="${mainCss}" rel="stylesheet" />
        <spring:url value="/time.js" var="mainJs" />
        <script src="${mainJs}"></script>
        
    
		<title>Time</title>
	</head>
	<body>
		<p id="time"><fmt:formatDate value="${now}" pattern="h:mm a"/></p>
	</body>
</html>