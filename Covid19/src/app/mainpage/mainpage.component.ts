import { Component, OnInit } from '@angular/core';
import { SubscribeService } from '../services/subscribe.service';
import { AppService } from '../services/app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ResourceLoader } from '@angular/compiler';

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
  "minvalue": "0.5",
  "maxvalue": "1.0",
  "color": "#FFD74D"
  }, {
  "minvalue": "1.0",
  "maxvalue": "2.0",
  "color": "#FB8C00"
  }, {
  "minvalue": "2.0",
  "maxvalue": "3.0",
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

  constructor(
    public appservice: AppService,
    public subscribeservice: SubscribeService,
    public router: Router,
    private route: ActivatedRoute,
  ) {
    console.log(this.chartCreated);
    this.subscribeservice.id.subscribe((id: any) => {
      this.id = id;
      console.log('Subscription');
      // if (this.chartCreated){
      //   console.log('Disposed');
      //   this.chartCreated.dispose();
      // }
    });
    if (this.id == undefined) {
      this.id = 0;
      console.log('Set');
    };
    this.dataSource = {
      "chart": {
      "caption": "Coronavirus Infection Risk Map",
      "subcaption": "India",
      "numbersuffix": "%",
      "includevalueinlabels": "1",
      "labelsepchar": ": ",
      "entityFillHoverColor": "#FFF9C4",
      "theme": "fusion"
      },
      // Aesthetics; ranges synced with the slider
      "colorrange": colorrange,
      // Source data as JSON --> id represents countries of the world.
      "data": []
    };
   }

  ngOnInit() {
  }

  gotoState(event: any) {

    console.log(event['dataObj']['id']);
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
