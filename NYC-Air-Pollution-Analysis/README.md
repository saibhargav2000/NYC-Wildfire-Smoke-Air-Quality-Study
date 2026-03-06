
# NYC Air Pollution Analysis (Wildfire Smoke Event)

## Overview
This project analyzes air pollution patterns in New York City during the June 2023 Canadian wildfire smoke event.
Satellite observations are used to examine changes in aerosol and carbon monoxide levels across NYC.

## Technologies
- Google Earth Engine
- PostgreSQL + PostGIS
- Python (Pandas, Matplotlib, SciPy)

## Workflow
1. Retrieve satellite data from Google Earth Engine.
2. Export raster datasets to Cloud Storage.
3. Import raster/vector data into PostgreSQL/PostGIS.
4. Convert raster pixels into vector polygons.
5. Run spatial queries to compute pollution averages.
6. Perform statistical tests and generate graphs.
