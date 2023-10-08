import { NavLink } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

function Navbar() {
    const user = useAuth();
    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            {!user.username && <NavLink to="/login">Login</NavLink>}
            <NavLink to="/extra">Extra</NavLink>
        </nav>
    )
}
export default Navbar;