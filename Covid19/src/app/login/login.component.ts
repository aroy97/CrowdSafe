import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { SubscribeService } from '../services/subscribe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { sha256 } from 'js-sha256';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  phoneNumber: string = '';
  password: string = '';
  userloader: boolean = false;

  constructor(
    public appservice: AppService,
    public subscribeservice: SubscribeService,
    public router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.subscribeservice.setHeader('Login Portal');
  }

  loginUser() {
    if(this.phoneNumber != "" && this.password != ""){
      if(this.phoneNumber.length != 10) {
        alert("Phone number should be 10 digits");
        this.phoneNumber = "";
      }
      else{
        let payload: {};
        payload = {
          "user": this.phoneNumber,
          "password": sha256(this.password)
        }
        this.userloader = true;
        this.appservice
        .loginApi(payload
        ).then((response: HttpResponse<any>) => {
          console.log(response);
          this.userloader = false;
          if(response.status == 200) {
            this.subscribeservice.setUserData(response.body['Name']);
            this.subscribeservice.setToken(response.body['Token']);
            this.router.navigate(['../heatmap'], { relativeTo: this.route }).catch();
          }
        }).catch((err: any) => {
          console.log(err);
        })
        this.clearfields();
      }
    } else {
      alert("All fields are mandatory.");
    }   
  }

  clearfields() {
    this.phoneNumber = '';
    this.password = '';
  }

  navigateRegister() {
    this.router.navigate(['../register'], { relativeTo: this.route }).catch();
  }

}
