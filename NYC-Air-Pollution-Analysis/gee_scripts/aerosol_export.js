
var region = ee.Geometry.Rectangle([-74.25,40.47,-73.70,40.91]);

Export.image.toCloudStorage({
  image: aerosol_image,
  description: 'nyc_aerosol_export',
  bucket: 'gee_data_nyc',
  fileNamePrefix: 'aerosol_dataset',
  region: region,
  scale: 30,
  crs: 'EPSG:4326',
  maxPixels: 1e13
});
