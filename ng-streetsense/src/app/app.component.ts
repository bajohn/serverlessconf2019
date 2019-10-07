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
    // sample query param
    //?address=1600 pennsylvania ave washington dc, 20001&parkoption=park
    this.router.queryParams.subscribe((query) => {
      console.log('QUERY', query);
      if ('address' in query) {
        this.address = query['address'];
      }
      if ('parkoption' in query) {
        this.curParkOption = query['parkoption'];
      }

      if (this.address.length > 0 && this.curParkOption.length > 0) {
        this.search();
      }
    });
  }
}


interface parkoption {
  value: string,
  label: string
}