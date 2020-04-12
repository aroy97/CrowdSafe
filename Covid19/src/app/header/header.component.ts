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
  userLogin: boolean = false;
  public tokenflag: boolean = false;
  public tokennumber: number;

  constructor(
    public subscribeservice: SubscribeService,
    public router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.subscribeservice.header.subscribe((title: string) => {
      this.header = title;
    })
    this.subscribeservice.token.subscribe((tok: number) => {
      this.tokennumber = tok;
    })
    this.subscribeservice.userData.subscribe((user: string) => {
      // console.log(user);
      if (user != null) {
        this.inboolean = false;
        this.tokenflag = true;
      }
    })
  }

  logout(){
    this.subscribeservice.setUserData(null);
    this.inboolean = true;
  }

  navigateLogin() {
    this.router.navigate(['../login'], { relativeTo: this.route }).catch();
  }

  navigateUpload() {
    this.router.navigate(['../upload'], { relativeTo: this.route }).catch();
  }

  navigateHome() {
    this.router.navigate(['../home'], { relativeTo: this.route }).catch();
  }

  navigateAbout() {
    this.router.navigate(['../about'], { relativeTo: this.route }).catch();
  }

  navigateHeatmap() {
    this.router.navigate(['../heatmap'], { relativeTo: this.route }).catch();
  }

  signOut() {
    this.subscribeservice.setUserData(null);
  }
}
