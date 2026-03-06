
CREATE TABLE aerosol_pixels AS
SELECT p.val AS aerosol_value, p.geom
FROM aerosol_raster r
CROSS JOIN LATERAL ST_DumpAsPolygons(r.rast) AS p;
