<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "fmt" uri = "http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>


<html>
	<head>
		<title>Date</title>
        <spring:url value="/style.css" var="mainCss" />
        <link href="${mainCss}" rel="stylesheet" />
        <spring:url value="/date.js" var="mainJs" />
        <script src="${mainJs}"></script>
	</head>
	<body>
		<p id="date"><fmt:formatDate value="${now}" pattern="EEEE, 'the' d 'of' MMMM, yyyy"/></p>
	</body>

</html>