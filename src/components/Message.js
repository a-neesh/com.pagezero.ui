import React, { Component } from 'react';

class Message extends Component {
    constructor(props) {
        super();
    }
    
    render() {
        return (
            <div className = "movie">
                <h2>{this.props.meta.title}</h2>
                <h3>From: <em>{this.props.meta.sender}</em></h3>
                <h3>To: <em>{this.props.meta.recipient}</em></h3>
                <h5>Send Date: <em>{this.props.meta.date}</em></h5>
                <img width="200" src={this.props.meta.message} alt="a piece from a letter from Gandhi"/>
                {/* add the transcippt 0f the letter in the alt for disabled people, use handwriting recognition. */}
            </div>
        );
    }
}

export default Message;