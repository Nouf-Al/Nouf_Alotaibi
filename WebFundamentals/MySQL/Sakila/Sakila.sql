/*1. What query would you run to get
 all the customers inside city_id = 312? Your query should 
 return customer first name, last name, email, and address.*/
select address.city_id,customer.first_name, customer.last_name, customer.email , address.address, city.city
from customer join address on address.city_id = customer.address_id 
join city on city.city_id = address.city_id
where address.city_id = 312;

/*2. What query would you run to get all comedy films? 
Your query should return film title, description, release year, 
rating, special features, and genre (category).*/
select film.film_id,film.title, film.description, film.release_year, film.rating,film.special_features, category.name
from film JOIN film_category ON film.film_id=film_category.film_id
JOIN category ON category.category_id=film_category.category_id
where category.name="Comedy";

/*3. What query would you run to get all the films joined by actor_id=5?
Your query should return the actor id, actor name, film title, description, 
and release year.*/
select actor.actor_id, concat_ws(" ",actor.first_name,actor.last_name)as actor_name, film.title,
film.description, film.release_year from film  
join film_actor on film.film_id=film_actor.film_id
join actor on actor.actor_id=film_actor.actor_id where actor.actor_id =5;

/*4. What query would you run to get all the customers in store_id = 1
 and inside these cities (1, 42, 312 and 459)? Your query should return
 customer first name, last name, email, and address.*/
select customer.store_id, customer.first_name, customer.last_name, customer.email , store.address_id
from customer 
join store on store.store_id = customer.store_id 
join address on address.address_id = customer.address_id
where address.city_id in (1, 42, 312 , 459) and customer.store_id=1;


/*5. What query would you run to get all the films with a "rating = G" and 
"special feature = behind the scenes", joined by actor_id = 15? 
Your query should return the film title, description, release year, rating, 
and special feature. Hint: You may use LIKE function in getting the 'behind the scenes' part.*/
select film.title, film.description, film.release_year, film.rating, film.special_features 
from film JOIN film_actor ON film.film_id=film_actor.film_id
JOIN actor ON actor.actor_id=film_actor.actor_id
where actor.actor_id =15 and film.rating = "G" and film.special_features LIKE ("%behind the scenes%");

/*6. What query would you run to get all the actors that joined in the film_id = 369? 
Your query should return the film_id, title, actor_id, and actor_name.*/
select film.film_id, film.title, actor.actor_id, concat_ws(" ",actor.first_name,actor.last_name)as actor_name FROM film
JOIN film_actor ON film.film_id=film_actor.film_id
JOIN actor ON actor.actor_id=film_actor.actor_id
where film.film_id=369;

/*7. What query would you run to get all drama films with a rental rate of 2.99?
 Your query should return film title, description, release year, rating, special features,
 and genre (category).*/
select film.title, film.description, film.release_year, film.rating,film.special_features, category.name
from film JOIN film_category ON film.film_id=film_category.film_id
JOIN category ON category.category_id=film_category.category_id
where film.rental_rate=2.99 and category.name="Drama";

/*8. What query would you run to get all the action films which 
are joined by SANDRA KILMER? Your query should return film title, description, release year, rating, special features, genre (category), 
and actor's first name and last name.*/
select film.title, film.description, film.release_year, film.rating, film.special_features, category.name, concat_ws(" ",actor.first_name,actor.last_name)as actor_name
from film JOIN film_category ON film.film_id=film_category.film_id
JOIN category ON category.category_id=film_category.category_id
JOIN film_actor ON film.film_id=film_actor.film_id
JOIN actor ON actor.actor_id=film_actor.actor_id
where actor.first_name="SANDRA" and actor.last_name="KILMER" and category.name="Action";




