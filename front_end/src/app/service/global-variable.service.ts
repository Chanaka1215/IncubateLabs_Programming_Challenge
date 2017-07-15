import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVariableService {
  public username: string;
  public editRecord: any;
  public hotelName: string;
  public baseURL = 'http://54.71.181.55:8001'; //http://localhost:8001'; //'http://54.71.181.55:8001';
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

  public setUpdateObject(e: any): void {
    this.editRecord = e;
  }

  public  getupdateObject(): any {
    return this.editRecord;
  }

  public getBaseUrl(): string {
    return this.baseURL;
  }

}
