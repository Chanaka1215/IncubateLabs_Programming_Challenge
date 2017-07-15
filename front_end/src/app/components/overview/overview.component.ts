import { Component, OnInit } from '@angular/core';
import {GlobalVariableService} from "../../service/global-variable.service";
import {Router} from "@angular/router";
import {HttpRequestService} from "../../service/http-request.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  public detaile :any;

  constructor(private _global: GlobalVariableService, private _router:Router ,private _httpService:HttpRequestService) { }

  ngOnInit() {
    if (this._global.getSession() === false) {
      this._router.navigate(['']);
    }else {
      this._httpService.getHotelsByName(this._global.getHotelName())
        .subscribe(list => {
            this.detaile = list.content;
            console.log(this.detaile);
          },
          error => alert(error.message),
          () => {
            console.log('success' );
          }
        );

    }

  }


}
