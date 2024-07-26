import { UserDashBoardComponent } from './user-dashboard.component';
import { UserRegComponent } from './user-reg.component';
import { UserLoginComponent } from './user-login.component';


export var userRules = [
    {path:"login",component:UserLoginComponent},
    
    {path:"reg",component:UserRegComponent},
    
    {path:"userDashBoard",component:UserDashBoardComponent},
];
