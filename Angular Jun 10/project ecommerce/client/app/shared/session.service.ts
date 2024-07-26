import { User } from './models/user';
export class SessionService {
    
        currentUser;
    
        constructor() {
            this.getCurrentUser();
         }
    
        setCurrentUser(data){
            this.currentUser = data;
        }
    
        getCurrentUser(){
           return this.currentUser;
        }
    
        isLoggedIn(){
            if(this.currentUser==null)
                return false;
            else
                return true;
        }
    
        logout(){
            this.currentUser = null;
            localStorage.clear();
        }
    }