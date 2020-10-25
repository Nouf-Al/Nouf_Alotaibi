select * from users;
select id as user_id, first_name, last_name from users;
INSERT INTO users VALUES (6,'Nouf','Alotaibi','NOF','1997-09-14', NOW(),NOW());
UPDATE users set first_name = "Rawan" where id=6;
DELETE from users where id=6;
