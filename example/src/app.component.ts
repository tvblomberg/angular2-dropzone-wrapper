import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

import { DropzoneConfigInterface } from 'angular2-dropzone-wrapper';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  private title = 'Simple example app for the angular2-dropzone-wrapper';
  public myAddedFile: Function;

  private config: DropzoneConfigInterface = {
    params: "name=test.png&directory=images"
  };

  public callback() {
    console.log("From Custom Function ");
  }

  private uploadedImages = [];

  constructor() { }

  ngOnInit() {
    //this.myAddedFile = this.callback.bind(this);
  }

  onUploadDone(event: any) {
    console.log('onUploadDone:', event);
  }

  onUploadError(event: any) {
    console.log('onUploadError:', event);
  }
}
