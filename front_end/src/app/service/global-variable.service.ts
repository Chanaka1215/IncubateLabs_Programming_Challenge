import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVariableService {
  private username: string;
  private mobile: string;
  private email: string;
  private baseURL = 'http://localhost:4000';
  private session : boolean = false;

  constructor() { }
  public setUsername(u: string): void {
   this.username = u;
  }

  public getUserName(): string {
    return this.username;
  }

  public setSession(log:boolean){
    console.log("set session done");
    this.session=log;
  }
  public getSession(){
    console.log("session returened");
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
