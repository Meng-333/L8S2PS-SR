/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var ne_50m_land = ee.FeatureCollection("users/22038036zjueducn/L8-S1-S2/shp/ne_50m_land"),
    ne_50m_urban_areas = ee.FeatureCollection("users/22038036zjueducn/L8-S1-S2/shp/ne_50m_urban_areas");
/***** End of imports. If edited, may not auto-convert in the playground. *****/

//种子_spring
//随机生成多点集合
var ROIs100_spring_landPoints = ee.FeatureCollection.randomPoints(
    {region: ne_50m_land, points: 100, seed: 100, maxError: 1});
var ROIs100_spring_urbanPoints = ee.FeatureCollection.randomPoints(
    {region: ne_50m_urban_areas, points: 50, seed: 100, maxError: 1});
//打印并加载ROI
// print('Random points from within the defined region', ROIs100_spring_landPoints,ROIs100_spring_urbanPoints);
// Map.addLayer(ROIs100_spring_landPoints, {color: 'black'}, 'ROIs100_spring_landPoints');
// Map.addLayer(ROIs100_spring_urbanPoints, {color: 'red'}, 'ROIs100_spring_urbanPoints');
//获取ROI经纬度
// 哨兵2纬度覆盖范围-56 82.8
var ROIs100_spring_landPoints_coordinates = ROIs100_spring_landPoints.geometry().coordinates()
var ROIs100_spring_landPoints_lat = ROIs100_spring_landPoints_coordinates.unzip().get(1)
print('ROIs100_spring_landPoints_coordinates',ROIs100_spring_landPoints_coordinates,'ROIs100_spring_landPoints_lat',ROIs100_spring_landPoints_lat)
var ROIs100_spring_urbanPoints_coordinates = ROIs100_spring_urbanPoints.geometry().coordinates()
var ROIs100_spring_urbanPoints_lat = ROIs100_spring_urbanPoints_coordinates.unzip().get(1)
print('ROIs100_spring_urbanPoints_coordinates',ROIs100_spring_urbanPoints_coordinates,'ROIs100_spring_urbanPoints_lat',ROIs100_spring_urbanPoints_lat)
//导出ROI至Asset
// Export.table.toAsset({
//   collection: ROIs100_spring_landPoints,
//   description: "ROIs100_spring_landPoints",
//   assetId: "ROIs100_spring_landPoints"
// })
// Export.table.toAsset({
//   collection: ROIs100_spring_urbanPoints,
//   description: "ROIs100_spring_urbanPoints",
//   assetId: "ROIs100_spring_urbanPoints"
// })

// 导出ROI至Google Drive
// Export.table.toDrive({
//   collection: ROIs100_spring_landPoints,
//   description: 'ROIs100_spring_landPointsShp',
//   folder: 'SHP',
//   fileFormat: 'SHP',
// });
// Export.table.toDrive({
//   collection: ROIs100_spring_urbanPoints,
//   description: 'ROIs100_spring_urbanPointsShp',
//   folder: 'SHP',
//   fileFormat: 'SHP',
// });



// // 种子_summer
// // 随机生成多点集合
// var ROIs200_summer_landPoints = ee.FeatureCollection.randomPoints(
//     {region: ne_50m_land, points: 100, seed: 200, maxError: 1});
// var ROIs200_summer_urbanPoints = ee.FeatureCollection.randomPoints(
//     {region: ne_50m_urban_areas, points: 50, seed: 200, maxError: 1});
// //打印并加载ROI
// print('Random points from within the defined region', ROIs200_summer_landPoints,ROIs200_summer_urbanPoints);
// Map.addLayer(ROIs200_summer_landPoints, {color: 'black'}, 'ROIs200_summer_landPoints');
// Map.addLayer(ROIs200_summer_urbanPoints, {color: 'red'}, 'ROIs200_summer_urbanPoints');
// //获取ROI经纬度
// // 哨兵2纬度覆盖范围-56 82.8
// var ROIs200_summer_landPoints_coordinates = ROIs200_summer_landPoints.geometry().coordinates()
// var ROIs200_summer_landPoints_lat = ROIs200_summer_landPoints_coordinates.unzip().get(1)
// print('ROIs200_summer_landPoints_coordinates',ROIs200_summer_landPoints_coordinates,'ROIs200_summer_landPoints_lat',ROIs200_summer_landPoints_lat)
// var ROIs200_summer_urbanPoints_coordinates = ROIs200_summer_urbanPoints.geometry().coordinates()
// var ROIs200_summer_urbanPoints_lat = ROIs200_summer_urbanPoints_coordinates.unzip().get(1)
// print('ROIs200_summer_urbanPoints_coordinates',ROIs200_summer_urbanPoints_coordinates,'ROIs200_summer_urbanPoints_lat',ROIs200_summer_urbanPoints_lat)
//导出ROI至Asset
// Export.table.toAsset({
//   collection: ROIs200_summer_landPoints,
//   description: "ROIs200_summer_landPoints",
//   assetId: "ROIs200_summer_landPoints"
// })
// Export.table.toAsset({
//   collection: ROIs200_summer_urbanPoints,
//   description: "ROIs200_summer_urbanPoints",
//   assetId: "ROIs200_summer_urbanPoints"
// })

// 导出ROI至Google Drive
// Export.table.toDrive({
//   collection: ROIs200_summer_landPoints,
//   description: 'ROIs200_summer_landPoints',
//   folder: 'SHP',
//   fileFormat: 'SHP',
// });
// Export.table.toDrive({
//   collection: ROIs200_summer_urbanPoints,
//   description: 'ROIs200_summer_urbanPoints',
//   folder: 'SHP',
//   fileFormat: 'SHP',
// });


// //种子_fall
// //随机生成多点集合
// var ROIs333_fall_landPoints = ee.FeatureCollection.randomPoints(
//     {region: ne_50m_land, points: 100, seed: 333, maxError: 1});
// var ROIs333_fall_urbanPoints = ee.FeatureCollection.randomPoints(
//     {region: ne_50m_urban_areas, points: 50, seed: 333, maxError: 1});
// //打印并加载ROI
// print('Random points from within the defined region', ROIs333_fall_landPoints,ROIs333_fall_urbanPoints);
// Map.addLayer(ROIs333_fall_landPoints, {color: 'black'}, 'ROIs333_fall_landPoints');
// Map.addLayer(ROIs333_fall_urbanPoints, {color: 'red'}, 'ROIs333_fall_urbanPoints');
// //获取ROI经纬度
// // 哨兵2纬度覆盖范围-56 82.8
// var ROIs333_fall_landPoints_coordinates = ROIs333_fall_landPoints.geometry().coordinates()
// var ROIs333_fall_landPoints_lat = ROIs333_fall_landPoints_coordinates.unzip().get(1)
// print('ROIs333_fall_landPoints_coordinates',ROIs333_fall_landPoints_coordinates,'ROIs333_fall_landPoints_lat',ROIs333_fall_landPoints_lat)
// var ROIs333_fall_urbanPoints_coordinates = ROIs333_fall_urbanPoints.geometry().coordinates()
// var ROIs333_fall_urbanPoints_lat = ROIs333_fall_urbanPoints_coordinates.unzip().get(1)
// print('ROIs333_fall_urbanPoints_coordinates',ROIs333_fall_urbanPoints_coordinates,'ROIs333_fall_urbanPoints_lat',ROIs333_fall_urbanPoints_lat)
// //导出ROI至Asset
// // Export.table.toAsset({
// //   collection: ROIs333_fall_landPoints,
// //   description: "ROIs333_fall_landPoints",
// //   assetId: "ROIs333_fall_landPoints"
// // })
// // Export.table.toAsset({
// //   collection: ROIs333_fall_urbanPoints,
// //   description: "ROIs333_fall_urbanPoints",
// //   assetId: "ROIs333_fall_urbanPoints"
// // })

// // 导出ROI至Google Drive
// Export.table.toDrive({
//   collection: ROIs333_fall_landPoints,
//   description: 'ROIs333_fall_landPoints',
//   folder: 'SHP',
//   fileFormat: 'SHP',
// });
// Export.table.toDrive({
//   collection: ROIs333_fall_urbanPoints,
//   description: 'ROIs333_fall_urbanPoints',
//   folder: 'SHP',
//   fileFormat: 'SHP',
// });


// //种子_winter
// //随机生成多点集合
// var ROIs777_winter_landPoints = ee.FeatureCollection.randomPoints(
//     {region: ne_50m_land, points: 100, seed: 777, maxError: 1});
// var ROIs777_winter_urbanPoints = ee.FeatureCollection.randomPoints(
//     {region: ne_50m_urban_areas, points: 50, seed: 777, maxError: 1});
// //打印并加载ROI
// print('Random points from within the defined region', ROIs777_winter_landPoints,ROIs777_winter_urbanPoints);
// Map.addLayer(ROIs777_winter_landPoints, {color: 'black'}, 'ROIs777_winter_landPoints');
// Map.addLayer(ROIs777_winter_urbanPoints, {color: 'red'}, 'ROIs777_winter_urbanPoints');
// //获取ROI经纬度
// // 哨兵2纬度覆盖范围-56 82.8
// var ROIs777_winter_landPoints_coordinates = ROIs777_winter_landPoints.geometry().coordinates()
// var ROIs777_winter_landPoints_lat = ROIs777_winter_landPoints_coordinates.unzip().get(1)
// print('ROIs777_winter_landPoints_coordinates',ROIs777_winter_landPoints_coordinates,'ROIs777_winter_landPoints_lat',ROIs777_winter_landPoints_lat)
// var ROIs777_winter_urbanPoints_coordinates = ROIs777_winter_urbanPoints.geometry().coordinates()
// var ROIs777_winter_urbanPoints_lat = ROIs777_winter_urbanPoints_coordinates.unzip().get(1)
// print('ROIs777_winter_urbanPoints_coordinates',ROIs777_winter_urbanPoints_coordinates,'ROIs777_winter_urbanPoints_lat',ROIs777_winter_urbanPoints_lat)
// // 导出ROI至Google Drive
// Export.table.toDrive({
//   collection: ROIs777_winter_landPoints,
//   description: 'ROIs777_winter_landPoints',
//   folder: 'SHP',
//   fileFormat: 'SHP',
// });
// Export.table.toDrive({
//   collection: ROIs777_winter_urbanPoints,
//   description: 'ROIs777_winter_urbanPoints',
//   folder: 'SHP',
//   fileFormat: 'SHP',
// });




