import { useAuth } from "../provider/AuthProvider";
import React from "react";
import {useLocation, Outlet, Navigate} from 'react-router-dom';
import Unauthorized from "../components/Unauthorised";


const Authorization = ({permissions}:any) =>{
    const user = useAuth();
    const location = useLocation();
    if(user.username) {
        const userpermission = user.permissions;
        const isAllowed = userpermission.some((allowed:string)=>userpermission.includes(allowed));
        return isAllowed?<Outlet/>:<Unauthorized/>;
    }
    return <Navigate to="/login" state={{path:location.pathname}} replace />;
}

export default Authorization;