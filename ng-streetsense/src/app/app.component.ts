import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent implements OnInit {
  address = '';
  curParkOption = '';
  parkOptions: parkoption[] = [
    {
      value: 'park',
      label: 'park'
    },
    {
      value: 'load',
      label: 'load'
    },
  ];

  ngOnInit() {

  }
}

interface parkoption {
  value: string,
  label: string
}