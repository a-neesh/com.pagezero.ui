import React, { Component} from 'react';

class Header extends Component {

    constructor(props) {
        super();
    }
    
    render() {
        return (
            <div className="App-header">
                <h2>{this.props.text}</h2>
            </div>
        )
    }

}

export default Header;