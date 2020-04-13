#  Problem Statement
The only suggestive measure to COVID-19 till date has been Social Distancing. We look forward to implementing a visionary model that would proctor gatherings as well as alert the respective authority/user by means of a real time real time 24*7 monitoring system .

#  Solution
The problem can be solved using TensorFlow's Object Detection API. Using the object-detection api, we can calculate the number of people in an image which can be used to detect crowd gatherings in a place. The number of people present is then divided into thresholds to detect the extent of the crowd gathering and accordingly a notification is sent to the respective authorities about the gathering along with the location of the gathering. 
To add on we would make it user friendly we plan to deploy the same in a Web-App alongside an Android Application with some added features which may turn out to be helpful these days such as route optimization (for the people who needs to go out inevitably) based on affected heat map and crowdsourcing, real-time tracking of the location of affected areas and timely alerts and notification push.

#  Frameworks/ Tools/ Technologies Used
- Python 3.7
- Tensorflow Framework
- Tensorflow Object Detection API
- faster_rcnn_resnet101_coco_2018_01_28 trained model.
- Angular Javascript Framework
- Ionic Framework
- Google Maps Javascript API
- FusionCharts Development Module
- Flask Framework
- Android Framework
- Google Map SDSK
- Firebase
- GPS

# Quickstart
## Prerequisites
- NodeJs
- Angular
- Flask API
- sqlite3 DB
- Tensorflow
- Protobuf
## Setting up the python environment
1. Run `pip install -r requirements.txt`
2. Run `python runserver.py`
## Installation For Webapp
1. Run `npm install -g @angular/cli` 
2. Browse into Covid19 folder, run `npm install` to download other dependencies required. Then run `npm install fusioncharts` followed by `npm install fusionmaps`.
3. Download fusioncharts.india.js file from the official website of fusioncharts and add it to the folder node_modules/fusioncharts/maps
4. Run `ng serve`
This should get the webapp up and running.
## Android App:
The app uses firebase for data storage and authentication. The apk for installation is available.
