import {Component, OnInit} from '@angular/core';
import {HttpRequestService} from '../../service/http-request.service';
import {GlobalVariableService} from '../../service/global-variable.service';
import {Router} from '@angular/router';

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
  public orderBy: string;

  constructor(private _httpService: HttpRequestService, private _global: GlobalVariableService, private _router: Router) {
    this.orderBy = '1';
  }

  ngOnInit() {
    if (this._global.getSession() === false) {
      this._router.navigate(['']);
    }
  }

  /**
   * wait till button group changes  recorded
   */
  isOrderChanged() {
    setTimeout(() => {
      console.log('changed');
      this.searchHotel();
    }, 800);
  }

  /**
   * This method  execute by ketup event
   * each and every keyup ,will return a list
   */
  searchHotel() {
    this._httpService.updateHotels(this.location, this.orderBy);

    this._httpService.getHotel()
      .subscribe(list => {
        this.rows = list.content;
        this.totalHotels = this.rows.length;
        console.log(this.totalHotels);
        console.log(this.rows);
        if (this.rows.length !== 0) {
          this.hotelsAvailabla = true;
          this.totalHotels = this.rows.length;
          console.log('hotels are avilable' + '00000');
        }

      });
  }

  /**
   * display more data about a selected hotel
   * @param i
   */
  moreData(i: number): void {
    console.log('selected ' + this.rows[i].hotelName);
    console.log('selected ' + this.rows[i].toString());
    this._global.setHotelname(this.rows[i].hotelName);
    this._router.navigate(['/home/data']);
  }

  /**
   * update a documenyt
   * Will ssend details to the servise
   * @param i
   */
  update(i): void {
    console.log('update method called');
    this._global.setHotelname(this.rows[i].hotelName);
    this._global.setUpdateObject(this.rows[i]);
    this._router.navigate(['/home/enter']);
  }


}
