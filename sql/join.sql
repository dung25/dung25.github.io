-- Given the CITY and COUNTRY tables, query the sum of the populations of all cities where the CONTINENT is 'Asia'.
-- Note: CITY.CountryCode and COUNTRY.Code are matching key columns.
SELECT 
    SUM(i.POPULATION)
FROM
    CITY AS i
        JOIN
    COUNTRY AS o ON i.COUNTRYCODE = o.CODE
WHERE
    o.CONTINENT = 'Asia';

-- Given the CITY and COUNTRY tables, query the names of all cities where the CONTINENT is 'Africa'.
-- Note: CITY.CountryCode and COUNTRY.Code are matching key columns.
SELECT 
    i.NAME
FROM
    CITY AS i
        JOIN
    COUNTRY AS o ON i.COUNTRYCODE = o.CODE
WHERE
    o.CONTINENT = 'Africa';

-- Given the CITY and COUNTRY tables, query the names of all the continents (COUNTRY.Continent) and their respective average city populations (CITY.Population) rounded down to the nearest integer.
-- Note: CITY.CountryCode and COUNTRY.Code are matching key columns.
SELECT 
    o.CONTINENT, FLOOR(AVG(i.POPULATION))
FROM
    CITY AS i
        JOIN
    COUNTRY AS o ON i.COUNTRYCODE = o.CODE
GROUP BY o.CONTINENT;
