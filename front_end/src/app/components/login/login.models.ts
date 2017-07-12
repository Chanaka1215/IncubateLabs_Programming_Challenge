/**
 * Created by         : Chanaka Fernando.
 * Date               : Wed, 7/12/2017 .
 * Email              : nuwan.c.fernando@gmail.com.
 * LinkedIn           : https://www.linkedin.com/in/n-chanaka-fernando
 * Belongs to Project : front_end.
 * Package            : .
 */

export class LoginModel {
  constructor(
    public name: string,
    public password: string,
  ) {}
}

export class RegisterModel {
  constructor(
    public userName: string,
    public mobile: number,
    public password: string,
    public rePassword: string,
    public email: string,
  ) {}
}

