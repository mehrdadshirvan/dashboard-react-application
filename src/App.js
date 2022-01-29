import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import loadable from "@loadable/component";

const Home = loadable(() => import('./Pages/Home'))
const Login = loadable(() => import('./Pages/Auth/Login'))
const About = loadable(() => import('./Pages/other/About'))
const Contact = loadable(() => import('./Pages/other/Contact'))
const NotFound = loadable(() => import('./Pages/other/NotFound'))

class App extends React.Component {



    getToken() {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
    };

    saveToken() {
        localStorage.setItem('token', JSON.stringify({token: 'mehrdad', age: 22}));
    };

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/404" component={NotFound}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
