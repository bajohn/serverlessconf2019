import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent implements OnInit {
  address = '';
  curParkOption = '';
  loadInProgress = false;

  constructor(private router: ActivatedRoute) {

  }

  parkOptions: string[] = [
    'park',
    'load'
  ];

  search() {
    console.log('test', this.address, this.curParkOption);
    this.loadInProgress = true;
  }

  ngOnInit() {
    this.router.queryParams.subscribe((query) => {
      console.log('QUERY', query);
    });
  }
}


interface parkoption {
  value: string,
  label: string
}