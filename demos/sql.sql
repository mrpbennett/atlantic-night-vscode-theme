CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255) 
);

CREATE TABLE TestTable AS
SELECT customername, contactname
FROM customers;

-- some comment
SELECT
    bid as win,
    cost as cost,
    FROM_UNIXTIME(cast(checkpointendtime/1000 AS INT)) AS ts
FROM
    fact.sometable
WHERE
    day = '2021-05-04'
    AND id = 12
    AND reason = 123
    AND user_id = 123456
    AND bid > cost
GROUP BY
    1,2,3