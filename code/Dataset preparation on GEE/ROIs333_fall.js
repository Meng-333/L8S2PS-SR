var roi = ee.Geometry.Point([65.52524, 38.76768]);
//roi坐标 +- 1 ；
var geomPoly = ee.Geometry.BBox(65.331, 39.633, 66.22, 38.399);

//2021.03.01-2021.05.31
//2021.06.01-2021.08.31
//2021.09.01-2021.11.30
//2021.12.01-2022.02.28

// 查询sen-1影像
var ROIs333_s1_fall = ee.ImageCollection('COPERNICUS/S1_GRD')
                    .filter(ee.Filter.listContains('transmitterReceiverPolarisation', 'VV'))
                    .filter(ee.Filter.eq('orbitProperties_pass', 'DESCENDING'))
                    //.filter(ee.Filter.eq('orbitProperties_pass', 'ASCENDING'))
			              .filter(ee.Filter.eq('instrumentMode', 'IW'))
			             //.filter(ee.Filter.eq('resolution_meters', 10))
			             //.filter(ee.Filter.eq('resolution', 'H'))
			              .filterBounds(roi)
		  	            .filterDate("2021-09-01","2021-11-30")
		  	            .select('VV')
print('ROIs333_s1_fall',ROIs333_s1_fall,ROIs333_s1_fall.mosaic(),ROIs333_s1_fall.size())
// Map.addLayer(ROIs333_s1_fall.mosaic().clip(ROIs100_landUrban_L2),{min:-30,max:5}, 'ROIs333_s1_fall.mosaic()')
Map.addLayer(ROIs333_s1_fall.mosaic(),{min:-30,max:5}, 'ROIs333_s1_fall.mosaic()')

// 查询sen-2影像
var ROIs333_s2_fall = ee.ImageCollection('COPERNICUS/S2_SR')       //L2A:表面反射率图像
                      .filterDate("2021-09-01","2021-11-30")    //筛选出指定时间内的影像
                      .filterBounds(roi)             //筛选出和roi相交的影像
                      //.sort("CLOUDY_PIXEL_PERCENTAGE")                      //按云量由小到大排序
                      .filter(ee.Filter.lt("CLOUDY_PIXEL_PERCENTAGE",1))    //云量小于1%
                      //.first()                                  //加载符合上述条件的第一张影像
                      // .clip(urban_pointShp);                    //裁剪影像
                      .select("B4","B3","B2")

print('ROIs333_s2_fall',ROIs333_s2_fall,ROIs333_s2_fall.mosaic(),ROIs333_s2_fall.size())
Map.addLayer(ROIs333_s2_fall.mosaic(),{min:0,max:5000,bands:["B4","B3","B2"]},"ROIs333_s2_fall.mosaic()");

//查询landsat8影像		  	           
var ROIs333_L8_fall = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2')
                    .filterBounds(roi)
		  	            .filterDate("2021-09-01","2021-11-30")
		  	            .filter(ee.Filter.lt("CLOUD_COVER",1))
		  	            .select(["SR_B4","SR_B3","SR_B2"])
var ROIs333_L8_fall_List = ROIs333_L8_fall.toList(ROIs333_L8_fall.size())
var L8_num = ROIs333_L8_fall.size()
print('ROIs333_L8_fall',ROIs333_L8_fall,ROIs333_L8_fall_List,ROIs333_L8_fall.mosaic(),ROIs333_L8_fall.size())
// Map.addLayer(ROIs100_L8_spring.mosaic(),{min:5000,max:12000,bands:["SR_B4","SR_B3","SR_B2"]},'ROIs100_L8_spring.mosaic()')
Map.addLayer(ROIs333_L8_fall.mosaic(),{min:5000,max:15000,bands:["SR_B4","SR_B3","SR_B2"]},'ROIs333_L8_fall.mosaic()')

//求影像交集
var intersection_s2_L8 = ROIs333_s2_fall.mosaic().updateMask(ROIs333_L8_fall.mosaic().mask())
// print('intersection_s2_L8',intersection_s2_L8)
Map.addLayer(intersection_s2_L8,{min:0, max: 5000},'intersection_s2_L8')
// var intersection_L8_s2 = ROIs100_L8_spring.mosaic().updateMask(ROIs100_s2_spring.mosaic().mask())
// print('intersection_L8_s2',intersection_L8_s2)
// Map.addLayer(intersection_L8_s2,{min:0, max: 12000},'intersection_L8_s2')

var intersection_s1_s1s2L8 = ROIs333_s1_fall.mosaic().updateMask(intersection_s2_L8.select('B2').mask())
// print('intersection_s1_s1s2L8',intersection_s1_s1s2L8)
Map.addLayer(intersection_s1_s1s2L8,{min:-30, max: 5},'intersection_s1_s1s2L8')
  Export.image.toDrive({
      image: intersection_s1_s1s2L8,
      description: "S1_Export_intersection_s1_s1s2L8",
      // region: intersection_s1_s1s2L8.geometry().bounds(),
      region: geomPoly,
      scale: 10,
      maxPixels: 1e13,
      folder: 'ROIs100_spring_land_test',
      // folder: 'ROIs100_spring_urban_test',
      crs: 'EPSG:4326'          //投影信息     //32610
  });
var intersection_s2_s1s2L8 = ROIs333_s2_fall.mosaic().updateMask(intersection_s1_s1s2L8.select('VV').mask())
// print('intersection_s2_s1s2L8',intersection_s2_s1s2L8)
Map.addLayer(intersection_s2_s1s2L8,{min:0, max: 5000},'intersection_s2_s1s2L8')
  Export.image.toDrive({
      image: intersection_s2_s1s2L8,
      description: "S2_Export_intersection_s2_s1s2L8",
      region: geomPoly,
      scale: 10,
      maxPixels: 1e13,
      folder: 'ROIs100_spring_land_test',
      // folder: 'ROIs100_spring_urban_test',
      crs: 'EPSG:4326'          //投影信息     //32610
  });
var intersection_L8_s1s2L8 = ROIs333_L8_fall.mosaic().updateMask(intersection_s1_s1s2L8.select('VV').mask())
// print('intersection_L8_s1s2L8',intersection_L8_s1s2L8,intersection_L8_s1s2L8.geometry())
Map.addLayer(intersection_L8_s1s2L8,{min:5000, max: 15000},'intersection_L8_s1s2L8')
  Export.image.toDrive({
      image: intersection_L8_s1s2L8,
      description: "L8_Export_intersection_L8_s1s2L8",
      region: geomPoly,
      scale: 30,
      maxPixels: 1e13,
      folder: 'ROIs100_spring_land_test',
      // folder: 'ROIs100_spring_urban_test',
      crs: 'EPSG:4326'          //投影信息     //32610
  });
// Map.addLayer(geomPoly,{color:'red'},'geomPoly_layer')
Map.addLayer(roi,{color:'red'},'roi_layer')