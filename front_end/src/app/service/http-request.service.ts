import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class HttpRequestService {

  constructor(private _http: Http) { }

}
