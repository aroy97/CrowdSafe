import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private BASE_URL: string = "https://15840292.ngrok.io";
  private username: string = 'Covid19';
  private password: string = 'Covid19';
  private usernamePassword: string = `${this.username}:${this.password}`;
  private httpOptions: any = ({
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Basic ${btoa(this.usernamePassword)}`
    }),
    observe: 'response'
  })
  constructor(private http: HttpClient) { }

  async registerApi(credentials: any): Promise<any> {
    const url: string = `${this.BASE_URL}/register`;
    return this.http.post(url, credentials, this.httpOptions).toPromise();
  }

  async messageOtpApi(credentials: any): Promise<any> {
    const url: string = `${this.BASE_URL}/send_otp`;
    return this.http.post(url, credentials, this.httpOptions).toPromise();
  }

  async loginApi(credentials: any): Promise<any> {
    const url: string = `${this.BASE_URL}/login`;
    return this.http.post(url, credentials, this.httpOptions).toPromise();
  }

  async uploadApi(credentials: any): Promise<any> {
    const url: string = `${this.BASE_URL}/crowd_detection`;
    return this.http.post(url, credentials, this.httpOptions).toPromise();
  }

  getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
      resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
      },
      err => {
        reject(err);
      });
    });

  }
  
  async gatherDataApi(): Promise<any> {
    const url: string = `${this.BASE_URL}/state_data`;
    return this.http.get(url, this.httpOptions).toPromise();
  }

  async gatherHeatMapDataApi(): Promise<any> {
    const url: string = `${this.BASE_URL}/get_heatmap`;
    return this.http.get(url, this.httpOptions).toPromise();
  }


}
