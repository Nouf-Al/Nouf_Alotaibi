select * from friendships;
select * from users;

-- 1. Return all users who are friends with Kermit, make sure their names are displayed in results.
SELECT users.first_name, users.last_name, user2.first_name as friend_first_name, user2.last_name as friend_last_name
from users JOIN friendships ON users.id=friendships.friend_id 
LEFT JOIN users as user2 ON user2.id = friendships.user_id
where friendships.friend_id =4;

-- 2. Return the count of all friendships
SELECT users.id,users.first_name, users.last_name, COUNT(friendships.friend_id)as count_of_friendships
from users JOIN friendships ON users.id=friendships.user_id 
group by friendships.user_id;

-- 3. Find out who has the most friends and return the count of their friends.
SELECT users.id,users.first_name, users.last_name, count( friendships.friend_id)as count_of_friendships
FROM users 
LEFT JOIN friendships ON users.id = friendships.user_id
LEFT JOIN friendships friends ON friendships.friend_id = friends.user_id AND friends.friend_id = users.id
GROUP BY users.id;

-- 4. Create a new user and make them friends with Eli Byers, Kermit The Frog, and Marky Mark
INSERT into users VALUES(6,"Nouf","Alotaibi",NOW(),NOW());
INSERT into friendships (user_id,friend_id,created_at,updated_at) VALUES(6,2,NOW(),NOW());
INSERT into friendships (user_id,friend_id,created_at,updated_at) VALUES(6,4,NOW(),NOW());
INSERT into friendships (user_id,friend_id,created_at,updated_at) VALUES(6,5,NOW(),NOW());

-- 5. Return the friends of Eli in alphabetical order
SELECT users.first_name, users.last_name, user2.first_name as friend_first_name, user2.last_name as friend_last_name
from users JOIN friendships ON users.id=friendships.friend_id 
LEFT JOIN users as user2 ON user2.id = friendships.user_id
where user2.id =2 order by users.first_name ASC;

-- 6. Remove Marky Mark from Eli’s friends.


-- 7. Return all friendships, displaying just the first and last name of both friends
SELECT users.first_name, users.last_name, user2.first_name as friend_first_name, user2.last_name as friend_last_name
from users JOIN friendships ON users.id=friendships.friend_id 
LEFT JOIN users as user2 ON user2.id = friendships.user_id;
