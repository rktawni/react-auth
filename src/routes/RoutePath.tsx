import { Route, Routes } from "react-router-dom";
import Authorization from "./Authorization";
import PERMISSIONS from "../permissions/Permissions";
import About from "../components/About";
import Home from "../components/Home";
import Authentication from "./Authentication";
import Profile from "../components/Profile";
import Extra from "../components/Extra";
import Login from "../components/Login";

function RoutePath() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route element={<Authorization permissions={[PERMISSIONS.CAN_VIEW_ABOUT]} />}>
                <Route path="about" element={<About />} />
            </Route>
            <Route path="profile" element={<Authentication><Profile/></Authentication>}/>
            <Route element={<Authorization permissions={[PERMISSIONS.CAN_VIEW_EXTRA]} />}>
                <Route path="extra" element={<Extra/>}/>
            </Route>
            <Route path="login" element={<Login/>}/>
        </Routes>
    )
}


export default RoutePath;