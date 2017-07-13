import { Component, OnInit } from '@angular/core';
import {HotelModel} from './enter-details.model';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {HttpRequestService} from '../../service/http-request.service';
import {GlobalVariableService} from '../../service/global-variable.service';
import {MdDialog, MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-enter-details',
  templateUrl: './enter-details.component.html',
  styleUrls: ['./enter-details.component.css']
})
export class EnterDetailsComponent implements OnInit {
  _httpService: any;
  public hotelModel = new HotelModel('', '', '', '', '');
  private today: string;
  private response : any;
  // public displaya = false;
  // public block  = true;
  public visible = false;
  private visibleAnimate = false;



  constructor(private _httpServise: HttpRequestService, private _global: GlobalVariableService, public snackBar: MdSnackBar) {

  }



  ngOnInit() {
    this.today = new Date().toString();
    this.hotelModel.enterDate = this.today;
    this.hotelModel.enterBy = this._global.getEmail();


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
            //this.block = false;

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

