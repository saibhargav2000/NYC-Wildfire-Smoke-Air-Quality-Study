
SELECT SUM(NULLIF(a.aerosol_value,'NaN'))/COUNT(a.aerosol_value) AS avg_aerosol
FROM aerosol_pixels a
JOIN parks p
ON ST_Intersects(a.geom, p.geom);
