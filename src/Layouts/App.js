import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import loadable from "@loadable/component";
import Header from './Share/Header';


const Home = loadable(() => import('./../Pages/Home'))
const Login = loadable(() => import('./../Pages/Auth/Login'))
const About = loadable(() => import('./../Pages/other/About'))
const Contact = loadable(() => import('./../Pages/other/Contact'))
const NotFound = loadable(() => import('./../Pages/other/NotFound'))

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <main>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        {/*<Route path="/login" component={Login}/>*/}
                        {/*<Route path="/about" component={About}/>*/}
                        {/*<Route path="/contact" component={Contact}/>*/}
                        {/*<Route path="/404" component={NotFound}/>*/}
                        {/*<Route component={NotFound}/>*/}
                    </Switch>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default App;
