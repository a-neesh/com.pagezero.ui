import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import AllMessages from './AllMessages';
import { initialMessages } from '../messages';
import { additionalMessages } from '../messages';
import AddMessage from './AddMessage';
import Canvas from './Canvas';
import Konva from 'konva';

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      messages: initialMessages,
      color: 'green',
      isMouseInside: false,
      isFetching: false
    };
    this.loadAdditionalMessages = this.loadAdditionalMessages.bind(this);
    this.addMessagetoList = this.addMessagetoList.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  fetchMessages = () => {
    var MESSAGE_SERVICE_URL = "http://localhost";
    this.setState({...this.state, isFetching: true})
    fetch(MESSAGE_SERVICE_URL)
      .then(response => response.json())
      .then(result => this.setState({messages: result, 
                                     isFetching: false}))
      .catch(e => console.log(e));
    }

  handleClick() {
    this.setState( (prevState) => ({color: Konva.Util.getRandomColor()}) );
  }

  handleMouseEnter() {
    this.setState( (prevState) => ({isMouseInside: true}) );
  }

  handleMouseLeave() {
    this.setState( (prevState) => ({ isMouseInside: false}) );
  }

  loadAdditionalMessages() {
    var currentMessages = { ...this.state.messages };
    var newMessages = Object.assign( currentMessages, additionalMessages );
    this.setState({ messages: newMessages });
  }

  addMessagetoList(message) {
    // console.log("messagessssssss", message);
    var ts = Date.now();
    var newMessage = {};
    newMessage[ 'message' + ts ] = message;
    var currentMessages = { ...this.state.messages };
    var newMessages = Object.assign( currentMessages, newMessage );
    this.setState({ messages: newMessages });
  }

  render() {
    var headertext="Let's Turnover to Page Zero!";
    return (
      <div className="App">
        <Header text={headertext}/>
        <p className="App-intro">
          Welcome to the 'Page Zero' React app!
        </p>
        <AllMessages css="movies" messages={this.state.messages}/>
        <div className="add-movies"><button onClick={this.loadAdditionalMessages}>Load more...</button></div>
        <AddMessage addMessage={this.addMessagetoList} />
        <Canvas color={this.state.color}
                click={this.handleClick}
                isMouseInside={this.state.isMouseInside}
                handleMouseEnter={this.handleMouseEnter}
                handleMouseLeave={this.handleMouseLeave}
        />
      </div>
    );
  }
}

export default App;
