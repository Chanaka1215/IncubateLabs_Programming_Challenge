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
import {HttpRequestService} from '../../service/http-request.service';
import {GlobalVariableService} from '../../service/global-variable.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginmodel = new LoginModel('', '');
  public regModel = new RegisterModel('', '', '', '');
  public passMatch = 0;
  public loginResponceMsg: string;
  public regResponceMsg: string = null;

  constructor(private _httpService: HttpRequestService, private _global: GlobalVariableService, private _router: Router) {
  }


  ngOnInit() {
  }


  /**
   * send login data to server
   * check validity client side
   */
  checkLogin(): void {
    const object = this.loginmodel;
    let responce: number;
    if (this.loginmodel.name.length >= 5 && this.loginmodel.name.length <= 10 ){
      if (this.loginmodel.password.length === 8 ){
        this._httpService.userLogin(object)
          .subscribe(
            data => responce = data.status,
            error => {
              alert(error.message);
              this.loginResponceMsg = 'Error occured when connecting to server';
            },
            () => {
              console.log('success1 ');
              if (responce === 200){
                this.loginResponceMsg = 'Successfully loged in';
                this._global.setUsername(this.loginmodel.name);
                this._global.setSession(true);
                this._router.navigate(['/home/find']);
              } else if (responce === 400){
                this.loginResponceMsg = 'User does not exist';
              } else {
                this.loginResponceMsg = 'Internal Error occured';
              }
            }

        );
      }else {
        this.loginResponceMsg = 'passwoed must have 8 characters';
      }
    }else {
      this.loginResponceMsg = 'user name must have 5-10 charcters ';
    }
  }


  /**
   * check the 2 password match
   * 8 character long
   * if yes return true
   * @returns {boolean}
   */
  paswordMacher(): boolean {

    const pass = this.regModel.password;
    const rePass = this.regModel.rePassword;
    console.log(pass + ' ' + rePass);
    if (rePass === '' && pass === '') {
      this.passMatch = 0;
    } else if (pass !== rePass && (rePass === '' || pass === '')) {
      this.passMatch = 1;
    } else if (pass !== rePass && (rePass !== '' || pass !== '')) {
      this.passMatch = 1;
    } else if (pass !== '' && rePass === '') {
      this.passMatch = 1;
    } else if (pass !== '' && rePass === '') {
      this.passMatch = 0;
    } else if (pass === rePass) {
      this.passMatch = 2;
      return true;
    } else {
      this.passMatch = 1;
    }

    if (this.passMatch === 1 && this.regModel.password.length === 8) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * check email is valid
   * by RegEx (copied fron stackOverflow)
   * @returns {boolean}
   */
  isValidEmail(): boolean {
    const male: string = this.regModel.email;
    const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    if (male != '' && (male.length <= 5 || !EMAIL_REGEXP.test(male))) {
      return false;
    }

     return true;
  }


  /**
   * check the enter name is valid
   * @returns {boolean}
   */
    isValidName(): boolean{
    const name = this.regModel.userName;
      if (name.length <= 10 && name.length >= 5) {
        return true;
      } else {
        return false;
      }
    }


  /**
   * check user data localy
   * then send to register
   * set the response to display
   */
  isValidUser(): void {
    if (this.paswordMacher() && this.isValidEmail() && this.isValidName()){
      const user = this.regModel;
      let responce : number;
      this._httpService.registerNewUser(user)
        .subscribe(
          data => {responce = data.status; },
          error => {
            this.regResponceMsg = 'Error occure whith connection';
            console.log('Error occure whith connection');
            alert(error.message);

            },
          () => {
            console.log('sucsess');
            this.passMatch = 0;
            if (responce === 200){
              this.regResponceMsg =  'User registration succsesfull';
            }else if (responce === 202){
              this.regResponceMsg =  'This Username has already taken';
            }else {
              this.regResponceMsg =  'some error';
            }
          }
        );
    }else {
      if (!this.isValidName()){
        this.regResponceMsg =  'Check the Username it must be between 5 - 10 characters';
      }else if (!this.isValidEmail()){
        this.regResponceMsg = 'check your email it seems net valid';
      }else if (this.paswordMacher()){
        this.regResponceMsg = 'Check your password it must have 8 characters';
      } else {
        this.regResponceMsg =  null;
      }
    }
  }
}
