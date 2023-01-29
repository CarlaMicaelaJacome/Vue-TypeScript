import { RouteLocation } from "vue-router";

const haveRoleGuard= (to:RouteLocation, from: RouteLocation, next: any) => {
    const userToken = localStorage.getItem("token");
    if(userToken){
        next();
    }else{
        alert("You need a token to enter");
        next({name:"login"});
    }
}

export default haveRoleGuard;