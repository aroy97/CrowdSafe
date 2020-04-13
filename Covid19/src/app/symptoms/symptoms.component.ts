import { Component, OnInit } from '@angular/core';
import { SubscribeService } from '../services/subscribe.service';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.scss']
})
export class SymptomsComponent implements OnInit {

  constructor(
    public subscribeservice: SubscribeService
  ) { }

  ngOnInit() {
    this.subscribeservice.setHeader('Covid19 Symptoms');
  }

}
