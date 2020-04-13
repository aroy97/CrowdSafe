import { Component, OnInit } from '@angular/core';
import { SubscribeService } from '../services/subscribe.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public subscribeservice: SubscribeService,) { }

  ngOnInit() {
    this.subscribeservice.setHeader('About The Team');
  }

}
