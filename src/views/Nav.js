import './Nav.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

const Nav = () => {
    return (
        <div className="topnav">
            <NavLink to="/" activeClassName="active" exact>
                Home
            </NavLink>
            <NavLink to="/todoApps" activeClassName="active">
                todo apps
            </NavLink>
            <NavLink to="/countdownApp" activeClassName="active">
                countdownApp
            </NavLink>

            {/* <NavLink to="/" activeClassName="selected">
                Home
            </NavLink>
            <a className="active" href="/">Home</a>
            <a href="/todoApps">todo apps</a>
            <a href="/countdownApp">Contact</a>
            <a href="#about">About</a> */}
        </div>
    )
}

export default Nav;

