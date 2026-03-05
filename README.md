# NYC Wildfire Smoke Air Quality Study

## Project Description

In June 2023, wildfire smoke originating from Canada spread across large parts of the northeastern United States and significantly affected air quality in New York City. During several days of this event, pollution levels reached hazardous conditions and visibility throughout the city dropped noticeably.

This project investigates how air pollution changed across NYC during that time period. The analysis combines satellite-derived pollution data with geographic boundary datasets to examine spatial patterns of air quality.

Two environmental indicators are the main focus of this study:

- **Aerosol concentration** – representing particulate matter in the atmosphere  
- **Carbon monoxide concentration** – a pollutant commonly associated with combustion

Using geospatial processing and statistical analysis, the project evaluates how these pollutants varied across neighborhoods and land use types during the wildfire smoke event.

---

## Motivation

Wildfire smoke has become a growing environmental concern and can impact cities that are far from the actual fire locations. Understanding how pollution spreads across urban environments can help improve environmental monitoring and public health preparedness.

This project explores whether pollution exposure differed across neighborhoods and whether urban green spaces experienced different pollution patterns during the wildfire smoke episode.

---

## Research Questions

### 1. Socioeconomic Differences

One goal of the analysis is to determine whether pollution levels differed between communities with different socioeconomic characteristics.

Census tracts are divided into two groups:

- **Higher poverty areas:**  
  At least 75% of residents live at or below 150% of the poverty threshold.

- **Lower poverty areas:**  
  At most 25% of residents fall below that threshold.

Pollution measurements are aggregated and compared between these two groups.

---

### 2. Parks vs Urban Areas

Another comparison examines whether pollution levels differ between:

- locations **inside park boundaries**
- locations **outside parks**

Vegetation and open space can influence how air pollutants disperse, so this comparison evaluates whether parks experienced different air quality conditions during the smoke event.

---

## Data Sources

This project integrates multiple geospatial datasets.

### Satellite Data

Air pollution indicators are obtained from satellite datasets accessed through **Google Earth Engine**. These datasets provide raster-based measurements representing atmospheric conditions across the NYC region.

Variables analyzed include:

- Aerosol index values
- Carbon monoxide concentration

Data is collected for three time periods related to the wildfire event.

### Geographic Data

Several vector datasets are used to define spatial boundaries for analysis:

- NYC borough boundaries
- Census tract boundaries
- Neighborhood boundaries
- Park boundaries
- Socioeconomic census data

These layers allow pollution measurements to be summarized across different regions of the city.

---

## Time Periods Examined

To evaluate the wildfire smoke impact, the data is grouped into three periods:

| Period | Description |
|------|-------------|
| Before Event | Air quality conditions before smoke reached NYC |
| Smoke Event | Peak pollution days (June 6–8, 2023) |
| After Event | Period when air quality began improving |

Comparing these periods allows the analysis to isolate the impact of the wildfire smoke.

---

## Tools and Technologies

The project uses several tools for cloud computing and geospatial analysis.

### Cloud Infrastructure
- Google Cloud Platform

### Data Processing
- Google Earth Engine

### Spatial Database
- PostgreSQL
- PostGIS extension

### Data Import Utilities
- `raster2pgsql`
- `shp2pgsql`

### Analysis
- SQL queries for statistical calculations

---

## Project Workflow

The project follows a multi-step workflow.

### 1. Data Extraction

Satellite datasets are accessed using Google Earth Engine scripts. These scripts retrieve pollution measurements for the New York City region during the selected time periods.

### 2. Data Export

The processed datasets are exported from Earth Engine to **Google Cloud Storage**.

### 3. Database Import

Raster and vector datasets are imported into a **PostgreSQL database with PostGIS support** using spatial data import utilities.

### 4. Data Preparation

Once imported, datasets are cleaned and standardized. This stage includes:

- removing invalid values
- verifying coordinate systems
- clipping datasets to the NYC boundary
- organizing datasets by time period

### 5. Analysis

SQL queries are used to compute summary statistics and perform comparisons across different spatial groups.

Statistical tests are then applied to determine whether differences between groups are significant.

---

## Project Structure

```
NYC-AirQuality-Project
│
├── data
│   ├── raster
│   └── vector
│
├── scripts
│   ├── earth_engine
│   └── database_queries
│
├── sql
│   ├── data_processing.sql
│   └── statistical_tests.sql
│
├── outputs
│   └── analysis_results
│
└── README.md
```

- **data/** contains spatial datasets used for analysis  
- **scripts/** contains processing scripts and Earth Engine scripts  
- **sql/** contains SQL queries used for analysis  
- **outputs/** contains generated results

---

## Reproducing the Analysis

To reproduce the workflow:

1. Create a project in **Google Cloud Platform**.
2. Enable the required cloud services.
3. Create a **Cloud Storage bucket**.
4. Launch a **PostgreSQL database with PostGIS enabled**.
5. Run Earth Engine scripts to export pollution datasets.
6. Import datasets into the database using spatial import tools.
7. Execute SQL scripts to perform spatial analysis and statistical tests.

---

## Limitations

Several limitations should be considered:

- Satellite observations estimate pollution rather than directly measuring ground-level concentrations.
- Temporal resolution may not capture rapid changes in air quality.
- Socioeconomic data is aggregated at the census tract level.

Despite these limitations, the analysis provides useful insight into how wildfire smoke affected air quality across NYC.

---

## Summary

This project demonstrates how satellite data, cloud infrastructure, and spatial databases can be combined to analyze urban air pollution events.

By examining pollution patterns across neighborhoods and land types, the study provides insight into how wildfire smoke impacted air quality across New York City during the June 2023 wildfire smoke episode.
