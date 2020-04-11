import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.scss']
})
export class HeatmapComponent implements AfterViewInit {
  // map: google.maps.Map;
  // lat = 40.730610;
  // lng = -73.935242;
  // coordinates = new google.maps.LatLng(this.lat, this.lng);
  // mapOptions: google.maps.MapOptions = {
  //   center: this.coordinates,
  //   zoom: 8,
  // };

  sanFrancisco = new google.maps.LatLng(22.5726, 88.3639);
  

  heatmapData = [
    new google.maps.LatLng(37.782, -122.447),
    new google.maps.LatLng(37.782, -122.445),
    new google.maps.LatLng(37.782, -122.443),
    new google.maps.LatLng(37.782, -122.441),
    new google.maps.LatLng(37.782, -122.439),
    new google.maps.LatLng(37.782, -122.437),
    new google.maps.LatLng(37.782, -122.435),
    new google.maps.LatLng(37.785, -122.447),
    new google.maps.LatLng(37.785, -122.445),
    new google.maps.LatLng(37.785, -122.443),
    new google.maps.LatLng(37.785, -122.441),
    new google.maps.LatLng(37.785, -122.439),
    new google.maps.LatLng(37.785, -122.437),
    new google.maps.LatLng(37.785, -122.435)
  ];
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
      center: this.sanFrancisco,
      zoom: 13,
      mapTypeId: 'roadmap'
    });
    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: this.heatmapData
    });
    heatmap.setMap(map);
   }
}
