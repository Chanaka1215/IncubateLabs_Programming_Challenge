import { Component, OnInit } from '@angular/core';
import {HotelModel} from './enter-details.model';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {HttpRequestService} from '../../service/http-request.service';
import {GlobalVariableService} from '../../service/global-variable.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-enter-details',
  templateUrl: './enter-details.component.html',
  styleUrls: ['./enter-details.component.css']
})
export class EnterDetailsComponent implements OnInit {
  public hotelModel = new HotelModel('', '', '', '', '');
  public response: any;
  public visible = false;
  public visibleAnimate = false;


  constructor(private _httpServise: HttpRequestService, private _global: GlobalVariableService, private _router:Router) {

  }

  ngOnInit() {
    if (this._global.getSession() === false) {
      this._router.navigate(['']);
    }else{
      this.hotelModel.enterBy = this._global.getUserName();
      console.log(this.hotelModel);
    }
  }


  postData() {
    const object = this.hotelModel;
    this._httpServise.postHotelData(object)
      .subscribe(
        data => {this.response = data.status; },
        err  => {alert(err.message); },
        ()   => {
          if (this.response === 200) {
            this.show();
            console.log('Submision was sucessfull');
            this.hotelModel = null;
          }
        }

      ); }














  show(): void {
    console.log('im show');
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }


}

