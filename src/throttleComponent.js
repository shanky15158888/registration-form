import React from 'react';
import throttle from 'lodash/throttle';

class ThrottleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleThrottle=throttle(this.triggerThrottle, 3000)
    }

    triggerThrottle = () => {
        console.log('throttle called every second once only');
    }

    render() {
        return (
            <div>
                <button type="button" onClick={() => this.handleThrottle()}>Throttle</button>
            </div>
        )
    }
}

export default ThrottleComponent