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
  results = [];
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {

  }

  parkOptions: string[] = [
    'park',
    'load'
  ];

  search() {
    console.log('test', this.address, this.curParkOption);
    this.loadInProgress = true;
    // this.router.navigate(
    //   [],
    //   {
    //     relativeTo: this.activeRoute,
    //     queryParams: { address: this.address, parkoption: this.curParkOption },
    //     queryParamsHandling: 'merge', // remove to replace all query params by provided
    //   });


    this.results = [];
    const res = [{
      "on_street": "PEARL STREET",
      "from_street": "COENTIES SLIP",
      "to_street": "BROAD STREET",
      "address": "86 Pearl Street",
      "rules": [
        'Street sweeping tuesday',
        'No trucks'
      ]
    }];
    this.results = res;
    this.loadInProgress = false;
  }

  ngOnInit() {
    // sample query param
    //?address=1600 pennsylvania ave washington dc, 20001&parkoption=park
    this.activeRoute.queryParams.subscribe((query) => {
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