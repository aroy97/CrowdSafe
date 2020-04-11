import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  public userData: BehaviorSubject<any> = new BehaviorSubject(null);
  public id: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { }

  setUserData(role: any): void {
    this.userData.next(role);
  }

  setId(id: any): void {
    this.id.next(id);
  }
}
