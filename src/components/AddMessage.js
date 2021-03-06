import React, { Component } from 'react';

class AddMessage extends Component {
	
	constructor(props) {
		super();
	}
	
	addNewMessage(e) {
		e.preventDefault();
		var message = {
			title: this.title.value,
			sender: this.sender.value,
			recipient: this.recipient.value,
			date: this.date.value,
			message: this.message.value
		};
		this.props.addMessage(message);
	}

	render() {
		return (
				<form className="message-form" onSubmit={(e)=> this.addNewMessage(e)}>
					<p>Add a Message</p>
					<input ref={ ( input ) => this.title = input } type="text" placeholder="Title" />
					<input ref={ ( input ) => this.sender = input } type="text" placeholder="Date" />
					<input ref={ ( input ) => this.recipient = input } type="text" placeholder="Sender" />
					<input ref={ ( input ) => this.date = input } type="text" placeholder="Recipient" />
					<input ref={ ( input ) => this.message = input } type="text" placeholder="Message" />
					<button type="submit">Add Message</button>
				</form>
			);
	}
}

export default AddMessage;