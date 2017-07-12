import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {GlobalVariableService} from './global-variable.service';

@Injectable()
export class HttpRequestService {
  private location: string;

  constructor(private _http: Http, private _global: GlobalVariableService) {
    console.log('Http Request service is ready');
  }

  getHotel() {
    return this._http.get(this._global.getBaseUrl() + '/get/hotels')
      .map(res => res.json());
  }


  updateHotels(location: string) {
    this.location = location;
  }



}
