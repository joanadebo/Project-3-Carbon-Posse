# Project-3-Group-14: Visualizing Data

## Project Background:

![image](https://user-images.githubusercontent.com/95774386/210461637-9d48d0f5-fd45-4d93-87bf-f29edfc99241.png)

Although many air pollutants resulting from human activity contribute to climate change (including methane (CH4), nitrous oxide (N2O), black carbon and others), carbon dioxide continues to be the primary contributor. While carbon dioxide is an essential heat-radiating component of the Earth's atmosphere, too much of it intensifies the natural greenhouse effect resulting in higher temperatures. These superfluous carbon dioxide (CO₂) emissions are a direct result of energy and material production from a variety of sources and fuel types, including coal, oil, gas, cement production, and gas flaring. As both domestic and global energy systems have developed through centuries and decades, so has the spatial and temporal distribution of the contribution of diverse fuel sources to CO₂ emissions. In this project, we depict the breakdown of CO₂ emissions by country overtime, along with historical and recent data on the major CO₂ emitters and comparisons when per capita adjustments are taken into account.

## Project Structure:
After reviewing many potential datasets, we chose one that holds that focuses on regional carbon dioxide emissions since the middle of the 18th century, right at the beginning of the industrial revolution. We first reviewed and cleaned this dataset to eliminate irrelevant categories (such as calling codes and country abbreviations) and decided to structure our data into six 50 year segments starting with 1750. The most recent year included in our data set was 2020 so the final interval was cut down to twenty years (from 2000 to 2020).  

The primary goal of our project was to display our dataset in an intuitive and interactive map-based data visualization within our own website. We chose to house our data in a PostgresSQL database using pgAdmin and SQLAlchemy for Python. Our data was then read into our code using Python Flask API routes. Leaflet, an open-source Javascript library was used along with other HTML and CSS components to further edit our final product. 

## Project Contributors:
1. Joan Adebowale
2. Tanner Horton
3. Brandyn Jackson
4. Bronwyn Milne

## Objective:

## Methodology:

## Limitations:

## Data Clean Up
data frame was normalized in jupyter and then the csv was imported using the pathway.
Changed % of world to "% of world (in decimal form)
Unites were excluded from the data except for in the headers  (i.e. removal of kme, %, etc)
columns -> country code, CO₂ emmission (tons) (as bigint) ? Will need to check), population 2022, area (as bigint), % of the world (numeric), year (as int), Density (km2) (as int)
removed "calling code column"
constraints switched to "not null"

## References:

https://www.kaggle.com/datasets/moazzimalibhatti/co2-emission-by-countries-year-wise-17502022

https://www.openstreetmap.org/#map=2/42.6/9.1

https://www.iass-potsdam.de/en/output/dossiers/air-pollution-and-climate-change#:~:text=These%20short%2Dlived%20climate%2Dforcing,to%20global%20warming%20after%20CO2

https://www.fs.usda.gov/ccrc/topics/air-pollution#:~:text=Air%20pollutants%20that%20play%20a,including%20black%20carbon%2C%20soot)

https://www.c2es.org/document/multi-gas-contributors-to-global-climate-change/#:~:text=The%20non%2DCO2%20GHGs%20emitted,and%20sulfur%20hexafluoride%20(SF6)

https://www.ourworldindata.org/emissions-by-fuel

https://www.climate.gov/news-features/understanding-climate/climate-change-atmospheric-carbon-dioxide.
