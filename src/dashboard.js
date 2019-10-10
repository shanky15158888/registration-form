import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <ul>
                        <li><Link to="/registration">Register</Link></li>
                        <li><Link to="/userList">UserList</Link></li>
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

export default Dashboard;