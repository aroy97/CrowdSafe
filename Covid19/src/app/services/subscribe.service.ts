import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  public userData: BehaviorSubject<string> = new BehaviorSubject(null);
  public id: BehaviorSubject<any> = new BehaviorSubject(null);
  public header: BehaviorSubject<string> = new BehaviorSubject(null);
  public token: BehaviorSubject<number> = new BehaviorSubject(null);

  constructor() { }

  setUserData(role: string): void {
    this.userData.next(role);
  }

  setId(id: any): void {
    this.id.next(id);
  }

  setHeader(header: string) : void {
    this.header.next(header);
  }

  setToken(tok: number) : void {
    this.token.next(tok);
  }

}
