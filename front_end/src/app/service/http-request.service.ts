import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {GlobalVariableService} from './global-variable.service';
import {Headers} from '@angular/http';

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

  // getUser() {
  //   return this._http.get(this._global.getBaseUrl() + '/get/user')
  //     .map(res => res.json());
  // }

  postHotelData(object: any) {
    console.log('access postLoggingData...');
    const obj = JSON.stringify(object);
    const body = obj;
    const header = new Headers();
    header.append('Content-Type', 'application/json');
    return this._http.post(this._global.getBaseUrl() + '/post/hotel', body, {headers: header})
      .map(res => res.json());
  }

  registerNewUser(object: any) {
    console.log('access postLoggingData...');
    const obj = JSON.stringify(object);
    const body = obj;
    const header = new Headers();
    header.append('Content-Type', 'application/json');
    return this._http.post(this._global.getBaseUrl() + '/post/check-user', body, {headers: header})
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



  updateHotels(location: string) {
    this.location = location;
  }



}