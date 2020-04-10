import { Component, OnInit } from '@angular/core';

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
  id: string = '000';

  constructor() {
    this.dataSource = {
      "chart": {
      "caption": "Average Annual Population Growth",
      "subcaption": " 1955-2015",
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
      
          }; // end of this.dataSource
   }

  ngOnInit() {
  }

  gotoState(event: any) {
    console.log(event['dataObj']['id']);
    this.id = (event['dataObj']['id']);
    console.log(this.id);

  }

}
