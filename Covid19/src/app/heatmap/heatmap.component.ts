import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.scss']
})
export class HeatmapComponent implements AfterViewInit {

  heatMapData = [
    {location: new google.maps.LatLng(22.573, 88.364), weight: 0.1},
    {location: new google.maps.LatLng(22.574, 88.365), weight: 0.2},
    {location: new google.maps.LatLng(22.575, 88.366), weight: 0.3},
    {location: new google.maps.LatLng(22.576, 88.367), weight: 0.4},
    {location: new google.maps.LatLng(22.577, 88.368), weight: 1.5},
  ];
  kolkata = new google.maps.LatLng(22.5726, 88.3639);
  // marker = new google.maps.Marker({
  //   position: this.coordinates,
  //   map: this.map,
  // });
  
  

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  constructor() { }

  ngAfterViewInit() {
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
