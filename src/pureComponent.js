import React from 'react';

export default class PureComponent extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>{this.props.value}</div>
        )
    }
}