import React, {createContext, useContext, useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AuthContext = createContext({});
export const AuthProvider = ({children}:{children:React.ReactNode|React.ReactNode[]})=>{
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.path|| "/profile";
    const defaultUser:user = {username:'', permissions:[]}
    const [user, setUser] = useState<user>(defaultUser)
    
    const login = (user:string)=>{
        if(user === "admin") {
            setUser({ username: user, permissions: ["view_extra"] });
        }
        else {
            setUser({username: user, permissions: ["view_about"]})
        }
        navigate(redirectPath, {replace:true})
    }

    const logout = () => {
        setUser(defaultUser);
    }
    return <AuthContext.Provider value={{user,login,logout}}>{children}</AuthContext.Provider>;
}

export interface user {
    username:string;
    permissions:Array<string>;
}

export function useAuth():any{
    return useContext(AuthContext);
}