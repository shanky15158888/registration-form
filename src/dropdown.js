import React from 'react';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropdown: false
        }
        this.buttonDropdown = React.createRef();
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.closeOnClickOutside);
    }

    closeOnClickOutside = (e) => {
        if(this.buttonDropdown && !this.buttonDropdown.current.contains(e.target)) {
            this.handleDropdown();
        }        
    }

    handleDropdown = () => {
        const { showDropdown } = this.state;
        if(!showDropdown) {
            document.addEventListener('click', this.closeOnClickOutside);
        } else {
            document.removeEventListener('click', this.closeOnClickOutside);
        }
        this.setState((prevState) => ({
            showDropdown: !prevState.showDropdown
        }))
    }

    render() {
        const { showDropdown } = this.state;
        return (
            <div ref={this.buttonDropdown}>
                <button type="button" onClick={this.handleDropdown}>Dropdown</button>
                {
                    showDropdown && <div>Dropdown shown</div>
                }
            </div>
        )
    }
}

export default Dropdown;