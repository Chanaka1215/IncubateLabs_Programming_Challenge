/*
 * Created by         : Chanaka Fernando.
 * Date               : Wed, 7/12/2017 .
 * Email              : nuwan.c.fernando@gmail.com.
 * LinkedIn           : https://www.linkedin.com/in/n-chanaka-fernando
 * Belongs to Project : incubateLabsFrontEnd.
 * Package            : .
 */


import { Component, OnInit } from '@angular/core';
import {GlobalVariableService} from '../../service/global-variable.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public loggedUser: string;

  constructor(private _global: GlobalVariableService, private _router:Router ) { }

  ngOnInit() {
    // if (this._global.getSession() === false) {
    //   this._router.navigate(['']);
    // }else {
      this.loggedUser = this._global.getUserName();
      console.log( this.loggedUser);
    // }

  }

  logout(){
    this._global.setSession(false) ;
    console.log( ' logged out');
      this._router.navigate(['']);
  }

}
