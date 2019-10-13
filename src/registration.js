import React from 'react';
import { parentContext } from './parentContext';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email: '',
            password: ''
        }
    }
    handleNextButton = () => {
        const { userName, email, password } = this.state;
        const data = { userName: userName, email: email }
        const { handleNext } = this.context;
        handleNext(data);
        this.props.history.push("/userList");
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'userName') {
            this.setState({ userName: value });
        } else if (name === 'email') {
            this.setState({ email: value });
        } else {
            this.setState({ password: value });
        }

    }
    render() {
        return (
            <div>
                <div>UserName: <input type="text" name="userName" value={this.state.userName} onChange={(e) => this.handleChange(e)} /></div>
                <div>Email: <input type="text" name="email" value={this.state.email} onChange={(e) => this.handleChange(e)} /></div>
                <div>Password: <input type="password" name="password" value={this.state.password} onChange={(e) => this.handleChange(e)} /></div>
                <div><button type="button" onClick={this.handleNextButton}>Next</button> </div>
            </div>
        )
    }
}
Register.contextType = parentContext;
export default Register;