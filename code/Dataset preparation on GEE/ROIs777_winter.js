var roi = ee.Geometry.Point([128.467, 36.1017]);
//roi坐标 +- 1 ；
var geomPoly = ee.Geometry.BBox(127.8945, 36.817, 128.466, 35.745);

//2021.03.01-2021.05.31
//2021.06.01-2021.08.31
//2021.09.01-2021.11.30
//2021.12.01-2022.02.28

// 查询sen-1影像
var ROIs777_s1_winter = ee.ImageCollection('COPERNICUS/S1_GRD')
                    .filter(ee.Filter.listContains('transmitterReceiverPolarisation', 'VV'))
                    .filter(ee.Filter.eq('orbitProperties_pass', 'DESCENDING'))
                    //.filter(ee.Filter.eq('orbitProperties_pass', 'ASCENDING'))
			              .filter(ee.Filter.eq('instrumentMode', 'IW'))
			             //.filter(ee.Filter.eq('resolution_meters', 10))
			             //.filter(ee.Filter.eq('resolution', 'H'))
			              .filterBounds(roi)
		  	            .filterDate("2021-12-01","2022-02-28")
		  	            .select('VV')
print('ROIs777_s1_winter',ROIs777_s1_winter,ROIs777_s1_winter.mosaic(),ROIs777_s1_winter.size())
Map.addLayer(ROIs777_s1_winter.mosaic(),{min:-30,max:5}, 'ROIs777_s1_winter.mosaic()')

// 查询sen-2影像
var ROIs777_s2_winter = ee.ImageCollection('COPERNICUS/S2_SR')       //L2A:表面反射率图像
                      .filterDate("2021-12-01","2022-02-28")    //筛选出指定时间内的影像
                      .filterBounds(roi)             //筛选出和roi相交的影像
                      //.sort("CLOUDY_PIXEL_PERCENTAGE")                      //按云量由小到大排序
                      .filter(ee.Filter.lt("CLOUDY_PIXEL_PERCENTAGE",1))    //云量小于1%
                      //.first()                                  //加载符合上述条件的第一张影像
                      // .clip(urban_pointShp);                    //裁剪影像
                      .select("B4","B3","B2")

print('ROIs777_s2_winter',ROIs777_s2_winter,ROIs777_s2_winter.mosaic(),ROIs777_s2_winter.size())
Map.addLayer(ROIs777_s2_winter.mosaic(),{min:0,max:5000,bands:["B4","B3","B2"]},"ROIs777_s2_winter.mosaic()");

//查询landsat8影像		  	           
var ROIs777_L8_winter = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2')
                    .filterBounds(roi)
		  	            .filterDate("2021-12-01","2022-02-28")
		  	            .filter(ee.Filter.lt("CLOUD_COVER",1))
		  	            .select(["SR_B4","SR_B3","SR_B2"])
var ROIs777_L8_winter_List = ROIs777_L8_winter.toList(ROIs777_L8_winter.size())
var L8_num = ROIs777_L8_winter.size()
print('ROIs777_L8_winter',ROIs777_L8_winter,ROIs777_L8_winter_List,ROIs777_L8_winter.mosaic(),ROIs777_L8_winter.size())
Map.addLayer(ROIs777_L8_winter.mosaic(),{min:5000,max:15000,bands:["SR_B4","SR_B3","SR_B2"]},'ROIs777_L8_winter.mosaic()')

//求影像交集
var intersection_s2_L8 = ROIs777_s2_winter.mosaic().updateMask(ROIs777_L8_winter.mosaic().mask())
// print('intersection_s2_L8',intersection_s2_L8)
Map.addLayer(intersection_s2_L8,{min:0, max: 5000},'intersection_s2_L8')
// var intersection_L8_s2 = ROIs100_L8_spring.mosaic().updateMask(ROIs100_s2_spring.mosaic().mask())
// print('intersection_L8_s2',intersection_L8_s2)
// Map.addLayer(intersection_L8_s2,{min:0, max: 12000},'intersection_L8_s2')

var intersection_s1_s1s2L8 = ROIs777_s1_winter.mosaic().updateMask(intersection_s2_L8.select('B2').mask())
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
var intersection_s2_s1s2L8 = ROIs777_s2_winter.mosaic().updateMask(intersection_s1_s1s2L8.select('VV').mask())
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
var intersection_L8_s1s2L8 = ROIs777_L8_winter.mosaic().updateMask(intersection_s1_s1s2L8.select('VV').mask())
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