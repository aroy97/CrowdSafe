import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppService } from '../services/app.service';
import { SubscribeService } from '../services/subscribe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  submitEnable: boolean = true;
  errorMsg: boolean = false;
  public imagePath;
  imgURL: any;
  imageSrc: any;
  sellersPermitFile: any;
  //base64s
  sellersPermitString: string;
  //json
  finalJson: {} = {};
  // errorMsg: boolean = false;
  currentId: number = 0;
  tokenFlag: boolean = false;

  constructor(
    private http: HttpClient,
    public appservice: AppService,
    public subscribeservice: SubscribeService,
    public router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.subscribeservice.userData.subscribe((user: string) => {
      // console.log(user);
      if (user == null) {
        this.router.navigate(['../login'], { relativeTo: this.route }).catch();
      }
      else{
        this.subscribeservice.token.subscribe((tok: number) => {
          this.tokenFlag = (tok>0)?true:false;
        });
        this.subscribeservice.setHeader('Upload Images on Crowd Gathering');
        this.appservice.getPosition()
        .then(pos=>
        {
          console.log(`Position: ${pos.lng} ${pos.lat}`);
        }).catch((err: any) => {
          this.errorMsg = true;
          console.log(err);
        })
      }
    })
    
  }

  addPictures() {
    this.finalJson = {
      "sellersPermitFile": this.sellersPermitString
    }
    console.log(this.finalJson);
  }

  public picked(event, field) {
    this.currentId = field;
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      if (field == 1) {
        this.sellersPermitFile = file;
        this.handleInputChange(file); //turn into base64
      }
    }
    else {
      alert("No file selected");
    }
  }

  handleInputChange(files) {
    var file = files;
    this.submitEnable=true;
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    this.submitEnable=false;
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
    reader.onloadend = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    let reader = e.target;
    var base64result = reader.result.substr(reader.result.indexOf(',') + 1);
    //this.imageSrc = base64result;
    let id = this.currentId;
    switch (id) {
      case 1:
        this.sellersPermitString = base64result;
        break
    }

    this.log();
  }

  log() { 
    // for debug
    // console.log('1', this.sellersPermitString);
  }
}
