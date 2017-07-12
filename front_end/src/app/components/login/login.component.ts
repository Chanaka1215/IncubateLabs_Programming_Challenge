/*
 * Created by         : Chanaka Fernando.
 * Date               : Wed, 7/12/2017 .
 * Email              : nuwan.c.fernando@gmail.com.
 * LinkedIn           : https://www.linkedin.com/in/n-chanaka-fernando
 * Belongs to Project : incubateLabsFrontEnd.
 * Package            : .
 */

import { Component, OnInit } from '@angular/core';
import {LoginModel, RegisterModel} from './login.models';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public Loginmodel= new LoginModel('', '');
  public regModel = new RegisterModel('', 0, '', '', '');

  constructor() { }


  ngOnInit() {
  }

}
