import { AccountsService } from './services/accounts.service';
import { Component } from '@angular/core';


@Component({
selector:'login-comp',
templateUrl:'./login.component.html'

})
export class LoginComponent{
    userName:string;
    password:string;

    constructor(public _serviceRef:AccountsService){}
    login()
    {
return this._serviceRef.validate(this.userName,this.password);
    }
}