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
  phonenumber: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  otp: string = '';
  otpFromApi: string = '';
  otpValidate : boolean = false;
  registerflag: boolean = false;
  errorflag: boolean = false;
  errorMsg: string = "";


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
    if(this.phonenumber != "" && this.email != "" && this.password != "" && this.confirmPassword !=""){
      if(this.password != this.confirmPassword){
        alert("Passwords dont match!");
        this.password = "";
        this.confirmPassword = "";
      }
      if(this.phonenumber.length != 10) {
        alert("Phone number should be 10 digits");
        this.phonenumber = "";
      }
      else{
        let payload: {};
        payload = {
          "name": this.email,
          "user": this.phonenumber,
          "password": sha256(this.password)
        }
        this.userloader = true;
        this.appservice
        .registerApi(payload
        ).then((response: HttpResponse<any>) => {
          this.userloader = false;
          if(response.status == 201) {
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
    if(this.email != ""){
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        let payload: {};
        payload = {
          "name": this.email
        }
        this.userloader = true;
        this.appservice
        .messageOtpApi(payload
        ).then((response: HttpResponse<any>) => {
          this.userloader = false;
          if (response.status == 200) {
            this.errorflag = false;
            this.otpFromApi = response.body['OTP'];
            this.otpValidate = true;
          }
        }).catch((err: any) => {
          this.userloader = false;
          if (err['status'] == 409) {
            this.errorMsg = err['error']['OTP'];
            this.errorflag = true;
            this.email = "";
          }

          console.log(err);
        })
      } else {
        alert('Enter a valid Email');
      }
    } else {
      alert("Email is Mandatory!");
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
    this.phonenumber = "";
    this.password = "";
    this.confirmPassword = "";
    this.email = "";
  }

  navigateLogin() {
    this.router.navigate(['../login'], { relativeTo: this.route }).catch();
  }

}
