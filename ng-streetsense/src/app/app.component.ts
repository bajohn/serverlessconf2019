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
  answer = '';
  loadInProgress = false;
  results = null;
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


    this.results = null;

    const asyncRes = this.staticResults;

    this.answer = this.staticResults['answer'];
    this.results = this.staticResults['results'];

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
  staticResults = {
    "answer": "The street schedule is NO PARKING (SANITATION BROOM SYMBOL) MOON & STARS (SYMBOLS) TUESDAY FRIDAY 2AM-6AM <->   BROADWAY between the intersection of CANAL STREET and WALKER STREET",
    "results": [
      {
        "friendly_name": "BROADWAY_CANAL-STREET_WALKER-STREET",
        "rules": [
          {
            "type": "Feature",
            "properties": {
              "id": 275572,
              "order_number": "S-385010",
              "sos": "E",
              "sos_new": [
                "E",
                "East side"
              ],
              "on_street": "BROADWAY",
              "from_street": "CANAL STREET",
              "to_street": "WALKER STREET",
              "smo_code": "PS-154B",
              "sign_description": "NO PARKING (SANITATION BROOM SYMBOL) MOON & STARS (SYMBOLS) TUESDAY FRIDAY 2AM-6AM <-> ",
              "size_description": "018 X 012",
              "facing_direction_type": null,
              "arrow_points": null,
              "distance_from_intersection": 67,
              "smo_category": "parking",
              "smo_subtype": "Street Cleaning",
              "last_work_date": "2016-04-29",
              "notes": null
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -74.00199854855063,
                40.7191520078827
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "id": 284530,
              "order_number": "S-385010",
              "sos": "E",
              "sos_new": [
                "E",
                "East side"
              ],
              "on_street": "BROADWAY",
              "from_street": "CANAL STREET",
              "to_street": "WALKER STREET",
              "smo_code": "PS-154B",
              "sign_description": "NO PARKING (SANITATION BROOM SYMBOL) MOON & STARS (SYMBOLS) TUESDAY FRIDAY 2AM-6AM <-> ",
              "size_description": "018 X 012",
              "facing_direction_type": null,
              "arrow_points": null,
              "distance_from_intersection": 272,
              "smo_category": "parking",
              "smo_subtype": "Street Cleaning",
              "last_work_date": "2016-04-29",
              "notes": null
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -74.00239896276538,
                40.71867990159858
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "id": 275574,
              "order_number": "S-385010",
              "sos": "E",
              "sos_new": [
                "E",
                "East side"
              ],
              "on_street": "BROADWAY",
              "from_street": "CANAL STREET",
              "to_street": "WALKER STREET",
              "smo_code": "PS-154B",
              "sign_description": "NO PARKING (SANITATION BROOM SYMBOL) MOON & STARS (SYMBOLS) TUESDAY FRIDAY 2AM-6AM <-> ",
              "size_description": "018 X 012",
              "facing_direction_type": null,
              "arrow_points": null,
              "distance_from_intersection": 139,
              "smo_category": "parking",
              "smo_subtype": "Street Cleaning",
              "last_work_date": "2016-04-29",
              "notes": null
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -74.0021392352225,
                40.71898457502741
              ]
            }
          }
        ]
      }
    ]
  }



}


interface parkoption {
  value: string,
  label: string
}