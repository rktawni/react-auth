import React from "react";
import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from "../provider/AuthProvider";

function Authentication({children}:{children:React.ReactNode|React.ReactNode[]}) {
    const {user} = useAuth();
    const location = useLocation();
    if(!user.username){
        
        return <Navigate to="/login" state={{path:location.pathname}} replace />;
    }
    return <>{children}</>;
}
export default Authentication;