import React from 'react';
import { parentContext } from './parentContext';
import { handleSession } from './utility.js';

class UserList extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = () => {
        const { registerDetail } = this.context;
        handleSession(registerDetail);
    }
    render() {
        return (
            <parentContext.Consumer>
                {({ registerDetail }) => (
                    <div>
                        <div>UserName:  ${registerDetail.userName}</div>
                        <div>Email:  ${registerDetail.email}</div>
                        <div><button type="submit" onClick={this.handleSubmit}>Submit</button></div>
                    </div>
                )}
            </parentContext.Consumer>
        )
    }
}

UserList.contextType = parentContext;
export default UserList;