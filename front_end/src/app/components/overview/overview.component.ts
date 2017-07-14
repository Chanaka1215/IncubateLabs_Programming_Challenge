import { Component, OnInit } from '@angular/core';
import {GlobalVariableService} from '../../service/global-variable.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(private _global: GlobalVariableService, private _router: Router) { }

  ngOnInit() {
    // if (this._global.getSession() === false) {
    //   this._router.navigate(['']);
    // }
  }

}
