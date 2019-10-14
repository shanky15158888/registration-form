import React from 'react';
import { parentContext } from './parentContext';
import isEmpty from 'lodash/isEmpty'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email: '',
            password: '',
            hasError: false
        }
    }
    handleNextButton = () => {
        const { userName, email, password } = this.state;
        const data = { userName: userName, email: email }
        const { handleNext } = this.context;
        if (!isEmpty(userName) && !isEmpty(email) && !isEmpty(password)) {
            handleNext(data);
            this.props.history.push("/userList");
            this.setState({ hasError: false });
        } else {
            this.setState({ hasError: true });
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    render() {
        const { hasError } = this.state;
        return (
            <div>
                <div>UserName: <input type="text" name="userName" value={this.state.userName} onChange={(e) => this.handleChange(e)} /></div>
                <div>Email: <input type="text" name="email" value={this.state.email} onChange={(e) => this.handleChange(e)} /></div>
                <div>Password: <input type="password" name="password" value={this.state.password} onChange={(e) => this.handleChange(e)} /></div>
                <div><button type="button" onClick={this.handleNextButton}>Next</button> </div>
                {
                    hasError && <div>All fields are mandatory to fill</div>
                }
            </div>
        )
    }
}
Register.contextType = parentContext;
export default Register;