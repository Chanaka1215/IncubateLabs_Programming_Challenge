import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {GlobalVariableService} from './global-variable.service';
import {Headers} from '@angular/http';

@Injectable()
export class HttpRequestService {
  private location: string;
  private orderBy: string ;

  constructor(private _http: Http, private _global: GlobalVariableService) {
    this.orderBy = '1';
    console.log('Http Request service is ready');
  }

  getHotel() {
    console.log('sort order' + this.orderBy);
    return this._http.get(this._global.getBaseUrl() + '/get/hotels/' + this.location.toUpperCase() + '/' + this.orderBy)
      .map(res => res.json());
  }

  getHotelsByName(hotelname: string) {
    return this._http.get(this._global.getBaseUrl() + '/get/hotels-name/' + hotelname)
      .map(res => res.json());
  }

  postHotelData(object: any) {
    console.log('access postLoggingData...');
    const obj = JSON.stringify(object);
    const body = obj;
    const header = new Headers();
    header.append('Content-Type', 'application/json');
    return this._http.post(this._global.getBaseUrl() + '/post/hotel', body, {headers: header})
      .map(res => res.json());
  }


  updateHotelData(object: any) {
    console.log('access postLoggingData...');
    const obj = JSON.stringify(object);
    const body = obj;
    const header = new Headers();
    header.append('Content-Type', 'application/json');
    return this._http.post(this._global.getBaseUrl() + '/post/update-hotel', body, {headers: header})
      .map(res => res.json());
  }



  registerNewUser(object: any) {
    console.log('access postLoggingData...');
    const obj = JSON.stringify(object);
    const body = obj;
    const header = new Headers();
    header.append('Content-Type', 'application/json');
    return this._http.post(this._global.getBaseUrl() + '/post/register', body, {headers: header})
      .map(res => res.json());
  }

  userLogin(object: any) {
    console.log('access postLoggingData...');
    const obj = JSON.stringify(object);
    const body = obj;
    const header = new Headers();
    header.append('Content-Type', 'application/json');
    return this._http.post(this._global.getBaseUrl() + '/post/login', body, {headers: header})
      .map(res => res.json());
  }



  updateHotels(location: string, order: string) {
    this.location = location;
    this.orderBy = order;
  }



}
