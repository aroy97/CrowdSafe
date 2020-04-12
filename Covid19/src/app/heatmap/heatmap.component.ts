import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { SubscribeService } from '../services/subscribe.service';


@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.scss']
})
export class HeatmapComponent implements AfterViewInit {

  heatMapData = [
    {location: new google.maps.LatLng(22.570, 88.364), weight: 10},
    {location: new google.maps.LatLng(22.571, 88.365), weight: 20},
    {location: new google.maps.LatLng(22.572, 88.366), weight: 30},
    {location: new google.maps.LatLng(22.573, 88.367), weight: 30},
    {location: new google.maps.LatLng(22.574, 88.368), weight: 30},
    {location: new google.maps.LatLng(22.575, 88.368), weight: 30},
    {location: new google.maps.LatLng(22.576, 88.368), weight: 30},
    {location: new google.maps.LatLng(22.577, 88.365), weight: 30},
    {location: new google.maps.LatLng(22.578, 88.367), weight: 30},
    {location: new google.maps.LatLng(22.579, 88.366), weight: 30},
    {location: new google.maps.LatLng(22.580, 88.364), weight: 30},
    {location: new google.maps.LatLng(22.584, 88.365), weight: 30},
    {location: new google.maps.LatLng(22.585, 88.367), weight: 30},
    {location: new google.maps.LatLng(22.583, 88.365), weight: 30},
    {location: new google.maps.LatLng(22.581, 88.364), weight: 30},
    {location: new google.maps.LatLng(22.569, 88.376), weight: 30},
    {location: new google.maps.LatLng(22.570, 88.374), weight: 30},
    {location: new google.maps.LatLng(22.564, 88.375), weight: 30},
    {location: new google.maps.LatLng(22.565, 88.377), weight: 30},
    {location: new google.maps.LatLng(22.563, 88.375), weight: 30},
    {location: new google.maps.LatLng(22.561, 88.374), weight: 30},
  ];
  kolkata = new google.maps.LatLng(22.5726, 88.3639);
  // marker = new google.maps.Marker({
  //   position: this.coordinates,
  //   map: this.map,
  // });
  
  

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  constructor(public subscribeservice: SubscribeService) { }

  ngAfterViewInit() {
    this.subscribeservice.setHeader('Heat Map of Infected Regions Across India');
    this.mapInitializer();
  }

  mapInitializer() {
    // this.map = new google.maps.Map(this.gmap.nativeElement, 
    // this.mapOptions);
    // this.marker.setMap(this.map);
    var map = new google.maps.Map(document.getElementById('map'), {
      center: this.kolkata,
      zoom: 13,
      mapTypeId: 'roadmap'
    });
    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: this.heatMapData
    });
    heatmap.setMap(map);
   }
}
