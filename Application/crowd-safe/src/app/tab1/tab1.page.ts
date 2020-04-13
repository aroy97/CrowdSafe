import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { SubscribeService } from '../services/subscribe.service';
import { AppService } from '../services/app.service';
import { HeatMapData } from '../models/models';
import { HttpResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements AfterViewInit{

  userloader: boolean = false;
  heatMapData: HeatMapData[] = [];
  heatmapData: any;


  kolkata = new google.maps.LatLng(22.5726, 88.3639);
  // marker = new google.maps.Marker({
  //   position: this.coordinates,
  //   map: this.map,
  // });

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;

  constructor(
    public subscribeservice: SubscribeService,
    public appservice: AppService,
    public router: Router,
    private route: ActivatedRoute,
    ) { }

  ngAfterViewInit() {
    this.router.navigate(['../../../login'], { relativeTo: this.route }).catch();
    this.subscribeservice.setHeader('Heat Map of Infected Regions Across India');
    this.userloader = true;
    this.appservice.gatherHeatMapDataApi()
    .then((response: HttpResponse<any>) => {
      this.userloader = false;
      if (response.status == 200) {
        response.body.forEach((data: any) => {
          let tempData: HeatMapData = new HeatMapData(data);
          this.heatMapData.push(tempData);
        });
        console.log(this.heatMapData);
        console.log(this.kolkata);
      }
    }).catch((err: any) => {
      this.userloader = false;
      console.log(err)
    })
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
