import { Component, OnInit } from '@angular/core';
import { SubscribeService } from '../services/subscribe.service';
import { AppService } from '../services/app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ResourceLoader } from '@angular/compiler';
import { HttpResponse } from '@angular/common/http';
import { StateData, StateMapData } from '../models/models';

const dataset = [{
  "id": "035",
  "value": ".82",
  "showLabel": "1"
  }];
  
  const colorrange = {
  "minvalue": "0",
  "code": "#FFE0B2",
  "gradient": "1",
  "color":
  [{
  "minvalue": "20",
  "maxvalue": "50",
  "color": "#FFD74D"
  }, {
  "minvalue": "50",
  "maxvalue": "100",
  "color": "#FB8C00"
  }, {
  "minvalue": "100",
  "maxvalue": "300",
  "color": "#E65100"
  }]
  };

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  dataSource: Object;
  id: number = 0;
  chartCreated: any;
  error: boolean = false;
  stateFullData: StateData[] = [];
  stateMapFullData: StateMapData[] = [];


  constructor(
    public appservice: AppService,
    public subscribeservice: SubscribeService,
    public router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {

    this.appservice
        .gatherDataApi()
        .then((response: any) => {
          // if (response.status != 200) {
          //   this.error = true;
          // } else {
            console.log(response);
            response.forEach((stateData: any) => {
              let statemodel : StateData = new StateData(stateData);
              let stateMapModel : StateMapData = new StateMapData(stateData);
              this.stateFullData.push(statemodel);
              this.stateMapFullData.push(stateMapModel);
            });
            console.log(this.stateFullData);
            console.log(this.stateMapFullData);
          // }
        });

    this.dataSource = {
      "chart": {
      "caption": "Coronavirus Infection Risk Map",
      "subcaption": "India",
      "includevalueinlabels": "1",
      "labelsepchar": ": ",
      "entityFillHoverColor": "#FFF9C4",
      "theme": "fusion"
      },
      // Aesthetics; ranges synced with the slider
      "colorrange": colorrange,
      // Source data as JSON --> id represents countries of the world.
      "data": this.stateMapFullData
    };
  }

  gotoState(event: any) {
    this.id = (event['dataObj']['id']);
    this.subscribeservice.setId(this.id);
    console.log(this.id);
    this.router.navigate(['../home'], { relativeTo: this.route }).catch();
    // location.reload();
    // this.chartCreated.dispose();
    
  }

  initializedMap(event: any) {
    this.chartCreated = event.chart;
    console.log(this.chartCreated);
    
  }

}
