import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private BASE_URL: string = "";
  private username: string = 'covid19';
  private password: string = 'covid19';
  private usernamePassword = `${this.username}:${this.password}`;
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
    const url: string = `${this.BASE_URL}/message`;
    return this.http.post(url, credentials, this.httpOptions).toPromise();
  }

  async loginApi(credentials: any): Promise<any> {
    const url: string = `${this.BASE_URL}/login`;
    return this.http.post(url, credentials, this.httpOptions).toPromise();
  }
}
