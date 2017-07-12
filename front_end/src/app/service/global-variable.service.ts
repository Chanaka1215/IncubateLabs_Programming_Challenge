import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVariableService {
  private username: string;
  private mobile: string;
  private email: string;
  private baseURL: string;

  constructor() { }
  public setUsername(u: string): void {
   this.username = u;
  }

  public getUserName(): string {
    return this.username;
  }

  public setMobile(m: string): void{
    this.mobile = m;
  }
  public getMobile(): string{
    return this.mobile;
  }

  public setEmail(e: string): void {
    this.email = e;
  }

  public  getEmail(): string{
    return this.email;
  }

  public getBaseUrl(): string{
    return this.baseURL;
  }

}
