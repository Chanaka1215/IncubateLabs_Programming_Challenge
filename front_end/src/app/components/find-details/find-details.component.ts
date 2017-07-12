import { Component, OnInit } from '@angular/core';
import {HttpRequestService} from '../../service/http-request.service';
import {GlobalVariableService} from '../../service/global-variable.service';

@Component({
  selector: 'app-find-details',
  templateUrl: './find-details.component.html',
  styleUrls: ['./find-details.component.css']
})
export class FindDetailsComponent implements OnInit {

  public location: string;
  public rows: any;
  public hotelsAvailabla = false;
  public totalHotels = 0;


  constructor (private _httpService: HttpRequestService, private _globalService: GlobalVariableService) {
  }

  searchHotel() {
    this._httpService.updateHotels(this.location);

    this._httpService.getHotel()
      .subscribe(list => {
        this.rows = list.content;
        this.totalHotels = this.rows.length;
        console.log(this.totalHotels);
        console.log(this.rows);
        if (this.rows.length !== 0) {
          this.hotelsAvailabla = true;
          this.totalHotels = this.rows.length;
          console.log('hotels are avilable');
        }

    });
  }

  ngOnInit() {
  }

}
