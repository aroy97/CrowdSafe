import { Component, OnInit, asNativeElements } from '@angular/core';
import { AppService } from '../services/app.service';
import { HttpResponse } from '@angular/common/http';
import { SubscribeService } from '../services/subscribe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { sha256 } from 'js-sha256';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userloader: boolean = false;
  name: string = '';
  phoneNumber: string = '';
  password: string = '';
  confirmPassword: string = '';
  otp: string = '';
  otpFromApi: string = '';
  otpValidate : boolean = false;
  registerflag: boolean = false;


  constructor(
    public appservice: AppService,
    public subscribeservice: SubscribeService,
    public router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.subscribeservice.setHeader('Registration Portal');
  }

  registerUser() {
    if(this.name != "" && this.phoneNumber != "" && this.password != "" && this.confirmPassword !=""){
      if(this.password != this.confirmPassword){
        alert("Passwords dont match!");
        this.password = "";
        this.confirmPassword = "";
      }
      if(this.phoneNumber.length != 10) {
        alert("Phone number should be 10 digits");
        this.phoneNumber = "";
      }
      else{
        let payload: {};
        payload = {
          "name": this.name,
          "user": this.phoneNumber,
          "password": sha256(this.password)
        }
        this.userloader = true;
        this.appservice
        .registerApi(payload
        ).then((response: HttpResponse<any>) => {
          console.log(response);
          this.userloader = false;
          if(response.status == 200) {
            this.router.navigate(['../login'], { relativeTo: this.route }).catch();
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

  requestOtp() {
    if(this.phoneNumber != ""){
      console.log(this.phoneNumber.length);
      if(this.phoneNumber.length != 10) {
        alert("Phone number should be 10 digits");
        this.phoneNumber = "";
      } else {
        let payload: {};
        payload = {
          "user": this.phoneNumber
        }
        this.userloader = true;
        this.appservice
        .messageOtpApi(payload
        ).then((response: HttpResponse<any>) => {
          console.log(response);
          this.userloader = false;
          if(response.status == 200) {
            this.otpFromApi = response.body[0]['otp'];
            this.otpValidate = true;
          }
        }).catch((err: any) => {
          console.log(err);
        })
      }
    } else {
      alert("Phone Number is Mandatory!");
    }     
  }

  validateOtp() {
    if (sha256(this.otp) == this.otpFromApi) {
      this.registerflag = true;
    } else {
      alert("OTP does not match");
    }
  }

  clearfields() {
    this.name = "";
    this.password = "";
    this.confirmPassword = "";
    this.phoneNumber = "";
  }

  navigateLogin() {
    this.router.navigate(['../login'], { relativeTo: this.route }).catch();
  }

}
