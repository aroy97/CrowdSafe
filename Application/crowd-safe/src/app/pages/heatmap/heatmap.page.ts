import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { SubscribeService } from '../../services/subscribe.service';
import { AppService } from '../../services/app.service';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.page.html',
  styleUrls: ['./heatmap.page.scss']
})
export class HeatmapPage {

  userloader: boolean = false;
  heatMapData: any[] = [];
  latitude: any;
  longitude: any;
  errorMsg: boolean = false;


  userlocation: any;
  // marker = new google.maps.Marker({
  //   position: this.coordinates,
  //   map: this.map,
  // });

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;

  constructor(
    public subscribeservice: SubscribeService,
    public appservice: AppService,
    ) {
      this.userloader = true;
      this.appservice.gatherHeatMapDataApi()
      .then((response: HttpResponse<any>) => {
        this.userloader = false;
        if (response.status == 200) {
          response.body.forEach((data: any) => {
            let tempData = {
              location: new google.maps.LatLng(Number(data['Latitude']),Number(data['Longitude'])),
              weight: 30
            }
            this.heatMapData.push(tempData);
            this.appservice.getPosition()
            .then(pos => {
              this.latitude = `${pos.lat}`;
              this.longitude = `${pos.lng}`;
              this.userlocation = new google.maps.LatLng(Number(this.latitude),Number(this.longitude));
              this.ngInitManual();
            }).catch((err: any) => {
              this.userlocation = new google.maps.LatLng(22.5726, 88.3639);
              this.ngInitManual();
              console.log(err);
            })
          });
        }
      }).catch((err: any) => {
        this.userloader = false;
        console.log(err)
      })
    }

  ngInitManual() {
    this.subscribeservice.setHeader('Heat Map of Infected Regions Across India');
    this.mapInitializer();
  }

  mapInitializer() {
    // this.map = new google.maps.Map(this.gmap.nativeElement, 
    // this.mapOptions);
    // this.marker.setMap(this.map);
    var map = new google.maps.Map(document.getElementById('map'), {
      center: this.userlocation,
      zoom: 9,
      mapTypeId: 'roadmap'
    });
    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: this.heatMapData
    });
    heatmap.setMap(map);
   }
}
