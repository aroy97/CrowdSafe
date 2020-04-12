import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  public imagePath;
  imgURL: any;
  imageSrc: any;
  sellersPermitFile: any;
  //base64s
  sellersPermitString: string;
  //json
  finalJson: {} = {};
  errorMsg: boolean = false;
  currentId: number = 0;

  constructor(
    private http: HttpClient,
    public appservice: AppService,
    ) { }

  ngOnInit() {
    this.appservice.getPosition()
    .then(pos=>
    {
      console.log(`Position: ${pos.lng} ${pos.lat}`);
    }).catch((err: any) => {
      this.errorMsg = true;
      console.log(err);
    })
  }

  // onFileChanged(event: any) {
  //   this.selectedFile = event.target.files[0];
  //   console.log(this.selectedFile);
  // }

  // onUpload() {
  //   // this.http is the injected HttpClient
  //   const uploadData = new FormData();
  //   uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
  //   console.log(uploadData);
  //   // this.http.post('my-backend.com/file-upload', uploadData, {
  //   //   reportProgress: true,
  //   //   observe: 'events'
  //   // })
  //   //   .subscribe(event => {
  //   //     console.log(event); // handle event here
  //   //   });
  // }

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
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(file); 
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
