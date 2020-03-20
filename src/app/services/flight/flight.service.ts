import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  endpoint = 'http://localhost:8090//';

  constructor() { }

  // getFlights(image: Flight) {
  //   this.fillHeadersWithAuthorization();
  //   axios.post(this.endpoint, image, {headers: this.headers})
  //     .then((data)=> {
  //       console.log(data)
  //     });
  // }

}
