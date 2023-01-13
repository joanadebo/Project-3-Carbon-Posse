# Carbon Posse
# Project-3-Group-14
***
## Background

![image](https://user-images.githubusercontent.com/95774386/210461637-9d48d0f5-fd45-4d93-87bf-f29edfc99241.png)

Carbon dioxide (CO2) emissions for the production of energy and materials come from a variety of sources and fuel types, including coal, oil, gas, cement production, and gas flaring. As both domestic and global energy systems have developed through centuries and decades, so has the spatial and temporal distribution of the contribution of diverse fuel sources to CO2 emissions. In this project, we depict the breakdown of CO2 emissions by country overtime, along with historical and recent data on the major CO2 emitters and comparisons when per capita adjustments are taken into account.

## Project Purpose





## Data Clean Up
data frame was normalized in jupyter and then the csv was imported using the pathway.
Changed % of world to "% of world (in decimal form)
Unites were excluded from the data except for in the headers  (i.e. removal of kme, %, etc)
columns -> country code, co2 emmission (tons) (as bigint) ? Will need to check), population 2022, area (as bigint), % of the world (numeric), year (as int), Density (km2) (as int)
removed "calling code column"
constraints switched to "not null"


