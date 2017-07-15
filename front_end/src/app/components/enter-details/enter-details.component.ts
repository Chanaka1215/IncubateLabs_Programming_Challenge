import {Component, OnInit} from '@angular/core';
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
  public updateMode = false;
  public isReadOnly = false;


  constructor(private _httpServise: HttpRequestService, private _global: GlobalVariableService, private _router: Router) {

  }

  ngOnInit() {
    if (this._global.getSession() === false) {
      this._router.navigate(['']);
    } else {
      this.hotelModel.enterBy = this._global.getUserName();

      if (this._global.getupdateObject()) {
        this.updateMode = true;
        this.isReadOnly = true;
        var obj = this._global.getupdateObject();
        this.hotelModel.hName = obj.hotelName;
        this.hotelModel.hAddress = obj.address;
        this.hotelModel.hLocation = obj.city;
        this.hotelModel.hDesc = obj.hDesc;

      }
    }
  }


  /**
   * to submit new document to the server
   */
  postData() {
    const object = this.hotelModel;
    this._httpServise.postHotelData(object)
      .subscribe(
        data => {
          this.response = data.status;
        },
        err => {
          alert(err.message);
        },
        () => {
          if (this.response === 200) {
            this.show();
            console.log('Submision was sucessfull');
            this.hotelModel = null;
          }
        }
      );

  }


  /**
   * for updating a existin document
   */
  updateData() {
    const object = this.hotelModel;
    this._httpServise.updateHotelData(object)
      .subscribe(
        data => {
          this.response = data.status;
        },
        err => {
          alert(err.message);
        },
        () => {
          if (this.response === 200) {
            this.show();
            console.log('Submision was sucessfull');
            this.hotelModel = null;
          }
        }
      );

  }


  /**
   * modal visible
   */
  show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  /**
   * to modal hide
   */
  hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  /**
   * to remove the modal by clicking container
   * @param event
   */
  onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }


}

