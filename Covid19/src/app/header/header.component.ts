import { Component, OnInit } from '@angular/core';
import { SubscribeService } from '../services/subscribe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  inboolean: boolean = true;
  header: string = "";
  constructor(
    public subscribeservice: SubscribeService,
    public router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.subscribeservice.header.subscribe((title: string) => {
      this.header = title;
    })
    this.subscribeservice.userData.subscribe((user: string) => {
      if (user != null) {
        this.inboolean = false;
      }
    })
  }

  navigateLogin() {
    this.router.navigate(['../login'], { relativeTo: this.route }).catch();
  }

  signOut() {
    this.subscribeservice.setUserData(null);
  }
}
