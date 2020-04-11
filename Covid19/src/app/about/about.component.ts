import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  selectedFile: File;


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  onUpload() {
    // this.http is the injected HttpClient
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    console.log(uploadData);
    // this.http.post('my-backend.com/file-upload', uploadData, {
    //   reportProgress: true,
    //   observe: 'events'
    // })
    //   .subscribe(event => {
    //     console.log(event); // handle event here
    //   });
  }

}
