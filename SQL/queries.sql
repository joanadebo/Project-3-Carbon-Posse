-- checking for successful creation of table 
SELECT * FROM emissions;

-- querying unique country list from our database 
SELECT DISTINCT COUNTRY FROM emissions

-- querying select years from database, later syntax needed to work outside of Postgres/pgAdmin

SELECT COUNTRY, co2_emission_in_tons FROM emissions WHERE YEAR = 1750;

SELECT "country","CO2_emission_in_tons" FROM emissions WHERE "Year" = 1800;

SELECT "country","CO2_emission_in_tons" FROM emissions WHERE "Year" = 1850;

SELECT "country","CO2_emission_in_tons" FROM emissions WHERE "Year" = 1900;

SELECT "country","CO2_emission_in_tons" FROM emissions WHERE "Year" = 1950;

SELECT "country","CO2_emission_in_tons" FROM emissions WHERE "Year" = 2000;

SELECT "country","CO2_emission_in_tons" FROM emissions WHERE "Year" = 2020;

-- required to avoid error within console, tip from Haroon 
ALTER TABLE emissions alter column co2_emission_in_tons type float;