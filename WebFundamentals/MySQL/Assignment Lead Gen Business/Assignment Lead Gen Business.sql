
-- 1. What query would you run to get the total revenue for March of 2012?
SELECT monthname(charged_datetime) as month, sum(amount) as revenue FROM billing 
WHERE month(charged_datetime) = 3 AND year(charged_datetime)= 2012 ;

-- 2. What query would you run to get total revenue collected from the client with an id of 2?
SELECT clients.client_id, sum(billing.amount) as total_revenue FROM clients
join billing on  clients.client_id = billing.client_id
WHERE clients.client_id=2 ;

-- 3. What query would you run to get all the sites that client with an id of 10 owns?
SELECT clients.client_id, sites.domain_name as website  FROM clients
join sites on  clients.client_id = sites.client_id
WHERE clients.client_id=10 ;

-- 4. What query would you run to get total # of sites created per month per year for the client with an id of 1?
-- What about for client with an id of 20?
SELECT clients.client_id, count(sites.domain_name) as number_of_websites, monthname(sites.created_datetime) as month_created,year(sites.created_datetime) FROM clients
join sites on  clients.client_id = sites.client_id
WHERE clients.client_id=1 
group by sites.created_datetime;

-- 4b.
SELECT clients.client_id, count(sites.domain_name) as number_of_websites, monthname(sites.created_datetime) as month_created,year(sites.created_datetime) FROM clients
join sites on  clients.client_id = sites.client_id
WHERE clients.client_id=20 
group by sites.created_datetime;

-- 5. What query would you run to get the total # of leads generated for each of the sites between January 1,
-- 2011 to February 15, 2011?
SELECT count(leads.registered_datetime)as number_of_leads , sites.domain_name as website FROM leads
join sites on leads.site_id = sites.site_id 
WHERE leads.registered_datetime between '2011-01-1T00:00:00.00' AND '2011-02-15T23:59:59.999'
group by sites.domain_name;

-- 6. What query would you run to get a list of client names and the total # of leads we've generated for each of
-- our clients between January 1, 2011 to December 31, 2011?
select concat_ws(" ",clients.first_name , clients.last_name)as client, count(leads.site_id) as number_of_leads
from clients join sites on clients.client_id=sites.client_id
join leads on leads.site_id=sites.site_id
where leads.registered_datetime between '2011-01-1T00:00:00.00' AND '2011-12-31T23:59:59.999'
group by client;

-- 7. What query would you run to get a list of client names and the total # of leads 
-- we've generated for each client each month between months 1 - 6 of Year 2011?
select concat_ws(" ",clients.first_name , clients.last_name) as client, count(leads.site_id )as number_of_leads, monthname(leads.registered_datetime)as month_generated
from clients join sites on clients.client_id=sites.client_id
join leads on leads.site_id=sites.site_id
where month(leads.registered_datetime) between 1 AND 6 and  year(leads.registered_datetime)=2011
group by client; -- error

-- 8. What query would you run to get a list of client names and the total # of leads we've generated for each of
--  our clients' sites between January 1, 2011 to December 31, 2011? Order this query by client id.  
--  Come up with a second query that shows all the clients, the site name(s), and the total number of leads 
--  generated from each site for all time.
select concat_ws(" ",clients.first_name , clients.last_name)as client, sites.domain_name as websit, count(leads.site_id) as number_of_leads
from clients join sites on clients.client_id=sites.client_id
join leads on leads.site_id=sites.site_id
where leads.registered_datetime between '2011-01-1T00:00:00.00' AND '2011-12-31T23:59:59.999'
group by sites.site_id
order by clients.client_id;

select concat_ws(" ",clients.first_name , clients.last_name)as client, sites.domain_name as website, count(leads.site_id) as number_of_leads
from clients left join sites on clients.client_id=sites.client_id
left join leads on leads.site_id=sites.site_id
group by sites.site_id
order by clients.client_id;

-- 9. Write a single query that retrieves total revenue collected from each client for each month of the year.
 -- Order it by client id.  First try this with integer month, second with month name.  
 -- A SELECT subquery will be needed for the second challenge.  Look at this for a hint.
SELECT concat_ws(" ",clients.first_name , clients.last_name)as client_name, sum(billing.amount) as total_revenue, month( billing.charged_datetime) 
as month_charged, year(billing.charged_datetime)as year_charged FROM clients
join billing on billing.client_id= clients.client_id 
group by billing.charged_datetime 
order by clients.client_id; -- error

-- 10. Write a single query that retrieves all the sites that each client owns. 
-- Group the results so that all of the sites for each client are displayed in a single field. 
-- It will become clearer when you add a new field called 'sites' that has all the sites that the client owns. 
-- (HINT: use GROUP_CONCAT)
select concat_ws(" ",clients.first_name , clients.last_name)as client_name, group_concat(sites.domain_name separator'/ ') as sites
from clients left join sites on clients.client_id = sites.client_id
group by clients.client_id
order by clients.client_id;