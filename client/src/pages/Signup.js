import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import './Login.css';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notification: '',
            username: '',
            password: '',
            passwordConfirm: ''
        };

        this.signUp = this.signUp.bind(this);
        this.usernameChange = this.usernameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.passwordConfirmChange = this.passwordConfirmChange.bind(this);
    }

    signUp = async (event) => {
        event.preventDefault();

        this.setState({ notification: '' });
        let { username, password, passwordConfirm } = this.state;
        username = username.trim();
        let valid = true;
        
        if (!username) {
            valid = false;
            this.setState({ notification: 'Invalid username.' });
        }
        else if (!password || !passwordConfirm || password !== passwordConfirm) {
            valid = false;
            this.setState({ notification: 'Must enter a password and the passwords must match.' });
        }
        
        if (valid) {
            console.log('go sign up');
            try {
                const response = await fetch('/api/signup', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });
                const responseText = await response.json();
                console.log(responseText);
                if (responseText === 'Successfully signed up!') {
                    this.props.history.push("/");
                }
                else {
                    this.setState({ notification: responseText });
                }
            }
            catch(err) {
                console.log(err);
            }
        }

    }

    usernameChange = event => {
        this.setState({ username: event.target.value });
    }

    passwordChange = event => {
        this.setState({ password: event.target.value });
    }

    passwordConfirmChange = event => {
        this.setState({ passwordConfirm: event.target.value });
    }

    render() {
        const { notification } = this.state;

        return (
            <div>
                <h1>SIGNUP</h1>
                { notification && <p>{notification}</p> }
                <form onSubmit={this.signUp}>
                    <h3>Username</h3>
                    <input className="InputBox" type="text" onChange={this.usernameChange} />
                    <h3>Password</h3>
                    <input className="InputBox" type="password" onChange={this.passwordChange} />
                    <h3>Confirm Password</h3>
                    <input className="InputBox" type="password" onChange={this.passwordConfirmChange} />
                    <button className="Button">Sign Up!</button>
                </form>
                <p>or <Link to="/login">Login</Link></p>
            </div>
        );
    }
}

export default withRouter(SignUp);