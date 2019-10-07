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
  statusQueryUrl = '';
  errorMsg = '';

  parkLookup = {
    'Street Cleaning': 0,
    'Paid Parking': 1,
    'Loading Zone': 2,
    'Free Parking': 3
  };

  parkOptions: string[];

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.parkOptions = Object.keys(this.parkLookup);
  }

  search() {
    console.log('test', this.address, this.curParkOption);

    this.doPost();
    // this.router.navigate(
    //   [],
    //   {
    //     relativeTo: this.activeRoute,
    //     queryParams: { address: this.address, parkoption: this.curParkOption },
    //     queryParamsHandling: 'merge', // remove to replace all query params by provided
    //   });


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

  async doPost() {
    this.loadInProgress = true;
    this.results = null;

    // const asyncRes = this.staticResults;


    const apiUrl = 'https://serverlessconfhack.azurewebsites.net/api/CanPark';
    const res = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify({
        address: this.address,
        question: this.parkLookup[this.curParkOption]
      })
    });

    const jsonRes = await res.json();

    console.log(jsonRes);
    this.statusQueryUrl = jsonRes['statusQueryGetUri'];

    this.answer = this.staticResults['answer'];
    this.results = this.staticResults['results'];
    console.log('results?', this.results);
    this.loadInProgress = false;
    //this.pollQueryUrl()

    // from: result     poll this: statusQueryGetUrl

    // runtimeStatus: "Failed" -> error
    // runtimeStatus: "Completed" -> success
    // output: big json block


  }

  async pollQueryUrl() {

    const res = await fetch(this.statusQueryUrl, {
      method: 'GET'
    });

    const resJson = await res.json();
    if (resJson['runtimeStatus'] === 'Completed') {
      const output = resJson['output'];
      this.answer = output['answer'];
      this.results = output['results'];
      this.loadInProgress = false;
    }
    else if (resJson['runtimeStatus'] === 'Failed') {
      this.errorMsg = 'Error receiving data';
      this.loadInProgress = false;
    }
    else {
      setTimeout(this.pollQueryUrl.bind(this), 1000);
    }




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