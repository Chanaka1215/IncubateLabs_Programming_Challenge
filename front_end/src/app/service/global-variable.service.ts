import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVariableService {
  public username: string;
  public email: string;
  public hotelName: string;
  public baseURL = 'http://54.71.181.55:8001/';
  public session = false;

  constructor() { }
  public setUsername(u: string): void {
   this.username = u;
  }

  public getUserName(): string {
    return this.username;
  }

  public setHotelname(u: string): void {
    this.hotelName = u;
  }

  public getHotelName(): string {
    return this.hotelName;
  }


  public setSession(log: boolean){
    console.log('set session done');
    this.session = log;
  }
  public getSession(){
    console.log('session returened');
    return this.session;
  }

  public setEmail(e: string): void {
    this.email = e;
  }

  public  getEmail(): string {
    return this.email;
  }

  public getBaseUrl(): string {
    return this.baseURL;
  }

}
