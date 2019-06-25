import {AccountsService} from './accounts.service'
export class AccountsStubService extends AccountsService{

validate(userName:string,password:string):boolean{
    if(userName==="tom" && password==="1243")
    {
        return true;
    }

    return false;
}
}