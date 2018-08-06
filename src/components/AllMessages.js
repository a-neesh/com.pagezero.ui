import React, { Component } from 'react';
import Message from './Message';

class AllMessages extends Component {

    constructor(props) {
        super();
    }
    
    render() {
        return (
            <div className={this.props.css}>
                {
                    Object
                        .keys(this.props.messages)
                        .map(key => <Message key={key} meta={this.props.messages[key]} />)
                }
            </div>
        );
    }
}

export default AllMessages;