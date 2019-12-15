import React from 'react';
import debounce from 'lodash/debounce';

class DebounceComponent extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            debouncedValue: ""
        };
        this.DebounceMethod = debounce(this.handleDebounce, 1000)
    }

    handleDebounce = (val) => {
        this.setState({ debouncedValue: val });       
    }

    handleChange = (e) => {
        // console.log(e.target.value)
        this.DebounceMethod(e.target.value);
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange}/>
                <h2>Debounced Value</h2>
                <div>{this.state.debouncedValue}</div>
            </div>
        )
    }
}

export default DebounceComponent