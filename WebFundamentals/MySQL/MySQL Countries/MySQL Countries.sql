/*--------------------1----------------------*/
SELECT country.Name, countrylanguage.Language, countrylanguage.Percentage
FROM country LEFT JOIN countrylanguage
ON country.Code = countrylanguage.CountryCode
WHERE countrylanguage.Language = 'Slovene'
ORDER BY countrylanguage.Percentage DESC;
/*--------------------2----------------------*/
select country.Name , count(city.Name) from country join city on country.Code = city.CountryCode 
group by  country.Name order by count(city.Name) DESC;
/*--------------------3----------------------*/
SELECT city.Name, city.population 
FROM city
WHERE CountryCode = 'MEX' and population > 500000
ORDER BY population DESC;
/*--------------------4----------------------*/
select country.Name, countrylanguage.Language, countrylanguage.percentage 
from country  JOIN countrylanguage ON country.Code = countrylanguage.CountryCode
where percentage >89 order by percentage DESC;
/*--------------------5----------------------*/
select Name, SurfaceArea, Population from country where SurfaceArea<501 and Population >100000;
/*--------------------6----------------------*/
select Name ,GovernmentForm, Capital,LifeExpectancy from country
where GovernmentForm = "Constitutional Monarchy" And Capital>200 AND LifeExpectancy>75;
/*--------------------7----------------------*/
select country.Name as Country, city.Name as City, city.District, city.Population from country
 left join city ON country.Code = city.CountryCode
 where city.District = "Buenos Aires" and city.Population > 500000;
/*--------------------8----------------------*/
select Region , count(Name) as countries from country group by Region order by count(Name) DESC;
