import React from 'react';
import ls from 'local-storage'
import './Login.css'

const cookie = {username: "", password: ""};
class LoginPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = cookie;
    }

    changeInputHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    login = event => {
        event.preventDefault();
        ls.set('cookie', this.state);
        this.props.setLoggedIn();
    };

    render() {
        return (
            <form>
                <input 
                    type="text" 
                    name="username"
                    value={this.state.username}
                    placeholder="Username..."
                    id="username"
                    onChange={this.changeInputHandler}
                    className="username-input" />
                <input 
                    type="text" 
                    name="password"
                    value={this.state.password}
                    placeholder="Password..."
                    id="password"
                    onChange={this.changeInputHandler}
                    className="password-input" />
                <button 
                    type="button"
                    id="login"
                    onClick={this.login}
                    className="login-button">
                    Login
                    </button>
            </form>
        )
    }
};

export default LoginPage;
