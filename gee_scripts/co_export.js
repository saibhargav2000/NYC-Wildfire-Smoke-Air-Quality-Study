
var region = ee.Geometry.Rectangle([-74.25,40.47,-73.70,40.91]);

Export.image.toCloudStorage({
  image: co_image,
  description: 'nyc_co_export',
  bucket: 'gee_data_nyc',
  fileNamePrefix: 'co_dataset',
  region: region,
  scale: 30,
  crs: 'EPSG:4326',
  maxPixels: 1e13
});
