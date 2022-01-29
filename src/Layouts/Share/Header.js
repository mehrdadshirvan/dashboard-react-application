import React from "react";
import App from "../App";
import {NavLink} from "react-router-dom";

class Header extends React.Component{

    render() {
        return(
            <header>
                <div className="navbar navbar-dark navbar-expand-md bg-dark shadow-sm">
                    <div className="container d-flex justify-content-between">
                        <a href="#" className="navbar-brand d-flex align-items-center">
                            <strong>Todo App</strong>
                        </a>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/">Home</NavLink>
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