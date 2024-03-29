import React from 'react';
import { Link } from 'react-router-dom';
import { getSessionData } from './utility';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';
import Dropdown from './dropdown';
import DebounceComponent from './debounceComponent'
import PortalComponent from './portalComponent'
import PureComponent from './pureComponent'
import ThrottleComponent from './throttleComponent'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            registerList: !isEmpty(getSessionData('registeredList')) ? JSON.parse(getSessionData('registeredList')).data : [],
            timer: new Date(),
            clicks: 0
        }
    }
    handleClick = () => {
        this.setState(state => ({
            clicks: state.clicks + 1
        }));
    }
    getList = () => {
        const { registerList } = this.state;
        if (!isEmpty(registerList)) {
            return <React.Fragment>
                <table>
                    <thead>
                        <tr>
                            <th>UserName</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            map(registerList, (item, index) => {
                                return <tr key={index}>
                                    <td>{item.userName}</td>
                                    <td>{item.email}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                <div><h1>{`${registerList.length} Users registered`}</h1></div>
            </React.Fragment>
        }
        return <div>{`0 Users registered`}</div>;
    }
    componentDidMount() {
        this.startTimer();
    }
    startTimer = () => {
        this.setTime = setInterval(() => {
            this.setState({ timer: new Date() });
        }, 1000);
    }
    stopTimer = () => {
        clearInterval(this.setTime);
    }
    componentWillUnmount() {
        this.stopTimer();
    }
    render() {
        const { timer } = this.state;
        return (
            <React.Fragment>
                <div>
                    <div>{`${timer.toLocaleDateString()}  ${timer.toLocaleTimeString()}`}</div>
                    <div>
                        <button type="button" onClick={this.stopTimer}>Stop Timer</button>
                    </div>
                    <ul>
                        <li><Link to="/registration">Register</Link></li>
                    </ul>
                    {
                        this.getList()
                    }
                    {/* <Dropdown />
                    <Dropdown />
                    <Dropdown />
                    <DebounceComponent /> */}
                    <PureComponent value={timer.toLocaleTimeString()}/>
                    <div>                        
                        <div onClick={this.handleClick}>
                            <p>Number of clicks: {this.state.clicks}</p>
                            <p>Open up the browser DevTools
                                to observe that the button
                                is not a child of the div
                                with the onClick handler.
                            </p>
                            <PortalComponent id="modal-root">
                                <div className="modal">
                                    <button>Click</button>
                                </div>
                            </PortalComponent>
                        </div>
                        <div id="modal-root"></div>
                    </div>
                    <ThrottleComponent />
                </div>
            </React.Fragment>
        )
    }
}

export default Dashboard;