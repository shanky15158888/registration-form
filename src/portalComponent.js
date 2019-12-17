import React from 'react'
import ReactDOM from 'react-dom';

export default class PortalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement("div")    
    }

    componentDidMount() {
        const child = document.getElementById(this.props.id);
        child.appendChild(this.el);
    }

    render () {
        return (
            ReactDOM.createPortal(
                this.props.children,
                this.el
            )
        )
    }
}