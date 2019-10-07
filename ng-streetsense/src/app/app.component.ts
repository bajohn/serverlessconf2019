import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent implements OnInit {
  address = '';
  curParkOption = '';



  parkOptions: string[] = [
    'park',
    'load'
  ];

  search() {
    console.log('test', this.address, this.curParkOption);
  }
  cb(event) {
    console.log('??', event);
  }
  ngOnInit() {

  }
}


interface parkoption {
  value: string,
  label: string
}