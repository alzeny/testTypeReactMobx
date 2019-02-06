import { observable, action, reaction, computed } from 'mobx'

export class User {
    email : string = "someUser"
    password :string = "pass"

    // get from service or order
    phone? : number | null = null
}

export class AuthStore{

    private userLoggedIn = observable.box(true); // по улолчанию залогированы, чтобы проверить работу singOut 
    private user : User = new User();

    isUserSingin(): boolean{
        return this.userLoggedIn.get(); 
    }

    @action
    singOut(): void{
        this.userLoggedIn.set(false);
    }

    @action
    singIn(newUser : User): void{
        this.user = newUser;
        this.userLoggedIn.set(true); 
    }

    
    getUserName() : string {
        return this.userLoggedIn.get() ? this.user.email : "Please, Login";
    }
}


export const authStore = new AuthStore();