import { Component, OnInit, NgZone } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {

  public latitude: number;
  public longitude: number;

  public constructor(
    public appservice: AppService,
  ) {
    this.latitude = 0;
    this.longitude = 0;
}

  ngOnInit() {
    this.appservice.getPosition().then(pos=>
    {
      console.log(`Position: ${pos.lng} ${pos.lat}`);
    });
  }
  // private getDeviceLocation(): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //       Geolocation.enableLocationRequest().then(() => {
  //           Geolocation.getCurrentLocation({timeout: 10000}).then(location => {
  //               resolve(location);
  //           }).catch(error => {
  //               reject(error);
  //           });
  //       });
  //   });
  // }

  // public updateLocation() {
  //     this.getDeviceLocation().then(result => {
  //         this.latitude = result.latitude;
  //         this.longitude = result.longitude;
  //     }, error => {
  //         console.error(error);
  //     });
  // }

  // public startWatchingLocation() {
  //     this.watchId = Geolocation.watchLocation(location => {
  //         if(location) {
  //             this.zone.run(() => {
  //                 this.latitude = location.latitude;
  //                 this.longitude = location.longitude;
  //             });
  //         }
  //     }, error => {
  //         console.log(error);
  //     }, { updateDistance: 1, minimumUpdateTime: 1000 });
  // }

  // public stopWatchingLocation() {
  //   if(this.watchId) {
  //       Geolocation.clearWatch(this.watchId);
  //       this.watchId = null;
  //   }
  // }



}
