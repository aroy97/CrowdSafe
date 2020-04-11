import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private BASE_URL: string = "http://localhost:5000";
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
    const url: string = `${this.BASE_URL}/message`;
    return this.http.post(url, credentials, this.httpOptions).toPromise();
  }

  async loginApi(credentials: any): Promise<any> {
    const url: string = `${this.BASE_URL}/login`;
    return this.http.post(url, credentials, this.httpOptions).toPromise();
  }

  async gatherDataApi(): Promise<any> {
    const url: string = `${this.BASE_URL}/state_data`;
    // return this.http.get(url, this.httpOptions).toPromise();
    return [
      {
        "id" : "001",
        "infected" : "30",
        "deaths" : "10",
        "recovered" : "20",
        "tested" : "250"
      },
      {
        "id" : "002",
        "infected" : "95",
        "deaths" : "10",
        "recovered" : "20",
        "tested" : "250"
      },
      {
        "id" : "035",
        "infected" : "150",
        "deaths" : "10",
        "recovered" : "20",
        "tested" : "250"
      },
      {
        "id" : "003",
        "infected" : "1",
        "deaths" : "0",
        "recovered" : "0",
        "tested" : "1"
      },
      {
        "id" : "004",
        "infected" : "29",
        "deaths" : "1",
        "recovered" : "0",
        "tested" : "250"
      },
      {
        "id" : "005",
        "infected" : "60",
        "deaths" : "1",
        "recovered" : "0",
        "tested" : "250"
      }
    ]
  }
}
