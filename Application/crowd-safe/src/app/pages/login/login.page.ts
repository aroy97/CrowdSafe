import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { sha256 } from 'js-sha256';
import { AppService } from '../../services/app.service';
import { SubscribeService } from '../../services/subscribe.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  phoneNumber: string = '';
  password: string = '';
  userloader: boolean = false;
  errorFlag: boolean = false;
  errorMsg: string = "";

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
        this.errorFlag = false;
        this.errorMsg = "";
        this.appservice
        .loginApi(payload
        ).then((response: HttpResponse<any>) => {
          console.log(response);
          this.userloader = false;
          if(response.status == 200) {
            this.subscribeservice.setUserData(this.phoneNumber);
            this.subscribeservice.setToken(response.body['Token']);
            this.router.navigate(['../heatmap'], { relativeTo: this.route }).catch();
          }
          else if(response.status == 204){
            this.errorFlag = true;
            this.errorMsg = "Authentication Failed";
          }
        }).catch((err: any) => {
          this.userloader = false;
          console.log(err);
          this.userloader = false;
          this.errorMsg = "Authentication Failed";
          this.errorFlag = true;
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
    this.router.navigate(['/menu/register'], { relativeTo: this.route }).catch();
  }

}
