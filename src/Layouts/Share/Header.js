import React from "react";
import {NavLink} from "react-router-dom";

class Header extends React.Component{

    render() {
        return(
            <header>
                <div className="navbar navbar-dark navbar-expand-md bg-dark shadow-sm">
                    <div className="container d-flex justify-content-between">
                        <NavLink  className="navbar-brand d-flex align-items-center" exact to="/">
                            <img src="https://www.rosena.ir/public/icon/iphone-pwa-icon-180.png"
                                 width="30px"
                                 alt=""/>
                            <span className={`mx-1`}>Rosena.ir</span>
                        </NavLink>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/auth/login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}


export default Header;