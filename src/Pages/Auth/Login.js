import React from "react";
import Connection from './../../Api/Connection';

class Login extends React.Component {

    state = {
        email: '',
        password: ''
    }
    api_token;

    formHandler(e) {
        e.preventDefault();
        // ajax
        if (this.state.email.length > 1) {
            Connection.post(`/user/login`, {
                email: this.state.email,
                password: this.state.password
            })
                .then(response => {
                    localStorage.setItem("token", response.data.data.api_token)
                })
                .catch(err => console.log(err))
            this.setState({text: ''})
        }
    }



    emailInputHandler = e => this.setState({email: e.target.value});
    passwordInputHandler = e => this.setState({password: e.target.value});

    render() {
        return (
            <>
                <div className={`container-fluid`}>
                    <div className={`row`}>
                        <div className={`col-sm-6 m-auto`}>
                            <div className={`card`}>
                                <div className={`card-body`}>
                                    <h5 className="card-title">Login</h5>
                                    <hr/>
                                    <form method={'POST'} action={'#'} onSubmit={this.formHandler.bind(this)}>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">
                                                Email address
                                            </label>
                                            <input type="email"
                                                   className="form-control"
                                                   id="email"
                                                   name="email"
                                                   aria-describedby="emailHelp"
                                                   value={this.state.email}
                                                   onChange={this.emailInputHandler.bind(this)}/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1"
                                                   className="form-label">Password</label>
                                            <input type="password"
                                                   className="form-control"
                                                   id="password"
                                                   name="password"
                                                   value={this.state.password}
                                                   onChange={this.passwordInputHandler.bind(this)}/>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Login;