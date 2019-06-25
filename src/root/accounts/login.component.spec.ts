import {LoginComponent} from './login.component'
import { AccountsService } from './services/accounts.service';
import { AccountsStubService } from './services/accounts.stub.service';
describe("login component test",()=>{


    it("Login function test",()=>{

        let _accountsService:AccountsService=new AccountsStubService();
        let obj= new LoginComponent(_accountsService);
        obj.userName="tom";
        obj.password="1243";
        let isValid=obj.login();
        expect(isValid).toBe(true);
    });
});