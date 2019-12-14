import React from 'react';
import { parentContext } from './parentContext';
import { handleSession } from './utility.js';
import isEmpty from 'lodash/isEmpty'

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

     

    handleSubmit = () => {
        const { registerDetail } = this.context;
        if (!isEmpty(registerDetail.email) && !isEmpty(registerDetail.userName)) {
            handleSession(registerDetail);
            this.props.history.push('/');
            this.setState({ hasError: false });
        } else {
            this.setState({ hasError: true });
        }
    }
    handleBack = () => {
        this.props.history.go(-1);
    }
    render() {
        const { hasError } = this.state;
        return (
            <parentContext.Consumer>
                {({ registerDetail }) => (
                    <div>
                        <div>{`UserName:  ${!isEmpty(registerDetail) ? registerDetail.userName : ''}`}</div>
                        <div>{`Email:  ${!isEmpty(registerDetail) ? registerDetail.email : ''}`}</div>
                        <div>
                            <button type="submit" onClick={this.handleBack}>Back</button>
                            <button type="submit" onClick={this.handleSubmit}>Submit</button></div>
                        {
                            hasError && <div>Username and Email fields can not be left Blank, PLease go back fill the data</div>
                        }
                    </div>
                )}
            </parentContext.Consumer>
        )
    }
}

UserList.contextType = parentContext;
export default UserList;