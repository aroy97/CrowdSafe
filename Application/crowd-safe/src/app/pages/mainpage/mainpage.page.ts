import { Component, OnInit } from '@angular/core';
import { SubscribeService } from '../../services/subscribe.service';
import { AppService } from '../../services/app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { StateData, StateMapData } from '../../models/models';

const dataset = [{
  "id": "035",
  "value": "1.5",
  "showLabel": "1"
  }];
  
  const colorrange = {
  "minvalue": "0",
  "code": "#FFE0B2",
  "gradient": "1",
  "color":
  [{
  "minvalue": "0",
  "maxvalue": "1",
  "color": "#008000"
  }, {
  "minvalue": "1",
  "maxvalue": "100",
  "color": "#FFA07A"
  }, {
  "minvalue": "100",
  "maxvalue": "250",
  "color": "#90EE90"
  }, {
  "minvalue": "250",
  "maxvalue": "400",
  "color": "#FFFFE0"
  }, { 
  "minvalue": "400",
  "maxvalue": "600",
  "color": "#FFFACD"
  }, {
  "minvalue": "600",
  "maxvalue": "800",
  "color": "#EEE8AA"
  }, {
  "minvalue": "800",
  "maxvalue": "1000",
  "color": "#FFA07A"
  }, {
  "minvalue": "1000",
  "maxvalue": "1200",
  "color": "#CD5C5C"
  }, {
  "minvalue": "1200",
  "maxvalue": "1500",
  "color": "#B22222"
  }, {
  "minvalue": "1500",
  "maxvalue": "3000",
  "color": "#8B0000"
  }]
  };

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.page.html',
  styleUrls: ['./mainpage.page.scss']
})
export class MainpagePage implements OnInit {

  dataSource: Object;
  id: number = 0;
  chartCreated: any;
  error: boolean = false;
  stateFullData: StateData[] = [];
  stateMapFullData: StateMapData[] = [];
  fetchGroupDataDone: boolean;

  constructor(
    public appservice: AppService,
    public subscribeservice: SubscribeService,
    public router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.subscribeservice.setHeader('Coronavirus Infection Map Across India');
    this.fetchGroupDataDone = false;
    this.appservice
    .gatherDataApi()
    .then((response: HttpResponse<any>) => {
      if (response.status != 200) {
        this.error = true;
      } else {
        response.body.forEach((stateData: any) => {
          let statemodel : StateData = new StateData(stateData);
          let stateMapModel : StateMapData = new StateMapData(stateData);
          this.stateFullData.push(statemodel);
          this.stateMapFullData.push(stateMapModel);
        });
        this.dataSource = {
          "chart": {
          // "caption": "Coronavirus Infection Risk Map",
          // "subcaption": "India",
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
        this.fetchGroupDataDone = true;
      }
    }).catch((err: any) => {
      this.fetchGroupDataDone = true;
      console.log(err);
    })
  }

  initializedMap(event: any) {
    this.chartCreated = event.chart;
    
  }

}