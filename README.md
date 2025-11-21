

# **Deep learning for remote sensing image super-resolution: A comprehensive review and a new real-matched benchmark**

## Paper

  - The implementation for "Deep learning for remote sensing image super-resolution: A comprehensive review and a new real-matched benchmark"

  - Our review manuscript has been submitted to the journal and is awaiting review.

  - Here is the first commit, more illustrations of the implementation will be released soon.

    
    
    ![](/fig/fig1.png)

## Folder Structure

Our folder structure is as follows:

```
├── code (python and javascript)
│   ├── SR Model (12 deep learning SR models)
│   ├── Data preparation on GEE
│   │   ├── ROIs_Points_Shp.js   
│   │   ├── ROIs100_spring.js  
│   │   ├── ROIs200_summer.js 
│   │   ├── ROIs333_fall.js 
│   │   ├── ROIs777_winter.js 
├── samples (L8S2PS-SR dataset samples)
│   ├── scene_1_Landsat-8
│   ├── scene_1_Sentinel-2
│   ├── scene_1_PlanetScope
│   ├── scene_2_Landsat-8
│   ├── scene_2_Sentinel-2
│   ├── scene_2_PlanetScope
```



## L8S2PS-SR

- Download the L8S2PS-SR dataset by [[Baidu Cloud Disk (code: L8PS)](https://pan.baidu.com/s/1MrYTAOhbUgrZsBCLAptbKQ)] or [[Kaggle platform](https://www.kaggle.com/mengfanen/datasets)] to your disk, the organized directory looks like:

  ```
  ├── Landsat8-Sentinel1-Sentinel2
  │   ├── ROIs100_spring
  │   │   ├── ROIs100_spring_land
  │   │   │   ├── ROIs100_spring_land_L8_5.tif
  │   │   │   ├── ROIs100_spring_land_s1_5.tif
  │   │   │   ├── ROIs100_spring_land_s2_5.tif
  │   │   │   ├── ROIs100_spring_land_L8_7.tif
  │   │   │   ├── ROIs100_spring_land_s1_7.tif
  │   │   │   ├── ROIs100_spring_land_s2_7.tif
  ...
  │   │   ├── ROIs100_spring_urban
  │   │   │   ├── ROIs100_spring_urban_L8_1.tif
  │   │   │   ├── ROIs100_spring_urban_s1_1.tif
  │   │   │   ├── ROIs100_spring_urban_s2_1.tif
  │   │   │   ├── ROIs100_spring_urban_L8_2.tif
  │   │   │   ├── ROIs100_spring_urban_s1_2.tif
  │   │   │   ├── ROIs100_spring_urban_s2_2.tif
  ...
  │   ├── ROIs200_summer (The same as above)
  │   ├── ROIs333_fall   (The same as above)
  │   ├── ROIs777_winter (The same as above)
  
  ├── PlanetScope-data 
  │   ├── ROIs100_spring
  │   │   ├── land
  │   │   │   ├── ROIs100_spring_land_p_21.tif
  │   │   │   ├── ROIs100_spring_land_p_90.tif
  │   │   ├── urban
  │   │   │   ├── ROIs100_spring_urban_p_9.tif
  │   │   │   ├── ROIs100_spring_urban_p_13.tif
  │   │   │   ├── ROIs100_spring_urban_p_43.tif
  ...
  │   ├── ROIs200_summer (The same as above)
  │   ├── ROIs333_fall   (The same as above)
  │   ├── ROIs777_winter (The same as above)
  
  ```

  

- Final ROIs distribution

  ![](/fig/ROIs.png)

  

## Abstract

Single-image super-resolution (SISR) is a long-standing research topic in the low-level vision of remote sensing. Its goal is to reconstruct a corresponding high-resolution (HR) image from a low-resolution (LR) image. In recent years, SISR for remote sensing has attracted widespread attention due to its potential applications in small object detection, land cover classification, and precision agriculture, and has witnessed the rapid development of deep learning methods. However, a comprehensive review of these methods remains lacking. To address this gap, this paper systematically and comprehensively reviews deep learning-based SISR papers from the past decade. Specifically, we first introduce the different deep learning network architectures used. Second, we provide a comprehensive summary of SISR algorithms for optical remote sensing images, including methodology, commonly used loss functions, remote sensing datasets, and evaluation metrics. To further promote the field of remote sensing super-resolution (SR), we propose a dataset for real-world super-resolution, L8S2PS-SR, which consists of 195 precisely aligned Landsat 8-Sentinel 2-PlanetScope satellite image pairs captured at different seasons and geographical locations. Furthermore, we implement 12 representative methods on publicly available datasets and our proposed L8S2PS-SR dataset to evaluate their performance. Finally, some challenges and future research directions in the field of remote sensing SISR are discussed, aiming to provide some research ideas for subsequent researchers. Our dataset is shared at https://github.com/Meng-333/L8S2PS-SR.



## Evaluations

### 1. Super-Resolution on Landsat 8 Multispectral Images

![](/fig/L8S2_SR.png)

### 2.Super-Resolution on Sentinel 2 Multispectral Images

![](/fig/S2PS_SR.png)



## Contact

If you have any questions about it, please feel free to let me know. (email:[mengfanen@tmslab.cn，12238036@zju.edu.cn]
