import { Component, OnInit } from '@angular/core';
import { SubscribeService } from '../services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  inboolean: boolean = true;
  header: string = "";
  constructor(
    public subscribeservice: SubscribeService
    ) { }

  ngOnInit() {
    this.subscribeservice.header.subscribe((title: string) => {
      this.header = title;
    })
  }

}
