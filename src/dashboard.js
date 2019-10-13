import React from 'react';
import { Link } from 'react-router-dom';
import { getSessionData } from './utility';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            registerList: !isEmpty(getSessionData) ? JSON.parse(getSessionData.data) : []
        }
    }
    getList = () => {
        const { registerList } = this.state;
        if (!isEmpty(registerList)) {
            return <React.Fragment>
                <table>
                    <tr>
                        <th>UserName</th>
                        <th>Email</th>
                    </tr>
                    {
                        map(registerList, (item, index) => {
                            return <React.Fragment>
                                <tr key={index}>
                                    <td>{item.userName}</td>
                                    <td>{item.userName}</td>
                                </tr>
                            </React.Fragment>
                        })
                    }
                </table>
                <div><h1>{`${registerList.length} Users registered`}</h1></div>
            </React.Fragment>
        }
        return <div>{`0 Users registered`}</div>;
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <ul>
                        <li><Link to="/registration">Register</Link></li>
                    </ul>
                    {
                        this.getList()
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default Dashboard;