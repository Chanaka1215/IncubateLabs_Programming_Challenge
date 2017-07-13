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



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginmodel= new LoginModel('', '');
  public regModel = new RegisterModel('', '', '', '');
  public passMatch = 0;

  constructor(private _httpService: HttpRequestService, private _global: GlobalVariableService) { }


  ngOnInit() {
  }

  regFormValidation(): void {
    var message: string;
    message = this. isValidUser();
    console.log(message);

  }



  paswordMacher(): boolean {

    const pass = this.regModel.password;
    const rePass = this.regModel.rePassword;
    console.log(pass + ' ' + rePass);
    if (rePass === '' && pass === ''){
      this.passMatch = 0;
    }else if ( pass !== rePass && (rePass === '' || pass === '')){
      this.passMatch = 1;
    }else if ( pass !== rePass && (rePass !== '' || pass !== '')){
      this.passMatch = 1;
    }else if ( pass !== '' && rePass === ''){
      this.passMatch = 1;
    }else if ( pass !== '' && rePass === '') {
      this.passMatch = 0;
    }else if (pass === rePass){
      this.passMatch = 2;
      return true;
    }else {
      this.passMatch = 1;
    }

    if (this.passMatch === 1 && this.regModel.password.length === 8){
      return true;
    }else {
      return false;
    }
  }

  isValidEmail(): boolean {
    var male = this.regModel.email;
    var pattern = '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/';
      alert(male.match(pattern));
      // return male.match(pattern);
      return pattern.test(male);
    }

    isValidName():boolean{
    var name = this.regModel.userName;
      if (name.length <= 10 && name.length >=5) {
        return true;
      } else {
        return false;
      }
    }

  isValidUser(): string {
    const isValidPw = false;
    if (this.paswordMacher() && this.isValidEmail() && this.isValidName()){
      const user = this.regModel;
      let responce : number;
      this._httpService.checkUserData(user)
        .subscribe(
          data => responce = data.status,
          error => alert(error.message),
          () => {
            console.log('sucsess');
            if (responce === 200){
              return 'User registration succsesfull';
            }else if (responce === 201){
              return 'This email is already have used';
            }else if (responce === 202){
              return 'This Username has already taken';
            }else {
              return null;
            }
          }
        );
    }else {
      if(!this.isValidName()){
        return 'Check the Username it must be between 5 - 10 characters';
      }else if(!this.isValidEmail()){
        return 'check your email it seems net valid';
      }else if(this.paswordMacher()){
        return 'Check your password it must have 8 characters';
      } else {
        return null;
      }
    }
  }
}
