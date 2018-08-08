import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import AllMessages from './AllMessages';
import AddMessage from './AddMessage';
import Canvas from './Canvas';
import Konva from 'konva';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      messages: {},
      color: 'green',
      isMouseInside: false,
      isFetching: false,
      loadedMore: false
    };
    this.loadAdditionalMessages = this.loadAdditionalMessages.bind(this);
    this.addMessagetoList = this.addMessagetoList.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.fetchMessages = this.fetchMessages.bind(this);
    this.MESSAGE_SERVICE_URL = "http://localhost:4000/messages";
  }

  fetchMessages = () => {
    this.setState( (prevState) => ({isFetching: true}) );
    axios.get(this.MESSAGE_SERVICE_URL)
      .then(response => {
        this.setState( (prevState) => ({messages: response.data.initialMessages, isFetching: false}) )
       })
      .catch(e => console.log(e));
    }
  
  componentDidMount() {
    this.fetchMessages();
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
    this.setState( (prevState) => ({isFetching: true}) );
    axios.get(this.MESSAGE_SERVICE_URL)
      .then(response => {
        this.setState( (prevState) => ({
          messages: Object.assign( {...this.state.messages}, response.data.additionalMessages ), 
          isFetching: false,
          loadedMore: true
        }))
       })
      .catch(e => console.log(e));
  }

  addMessagetoList(message) {
    var timeStamp = Date.now();
    var newMessage = {};
    newMessage[ 'message' + timeStamp ] = message;
    var currentMessages = { ...this.state.messages };
    var newMessages = Object.assign( currentMessages, newMessage );
    this.setState({ messages: newMessages });
    axios
      .post(this.MESSAGE_SERVICE_URL, {'message': message})
      .then(r => console.log(r))
      .catch(e => console.log(e));
  }

  render() {
    var headertext="Let's Turnover to Page Zero!";
    return (
      <div className="App">
        <Header text={headertext}/>
        <p className="App-intro">
          Welcome to the 'Page Zero' React app!
        </p>
        <p>{this.state.isFetching ? 'Fetching messages...' : ''}</p>
        <AllMessages css="movies" messages={this.state.messages}/>
        <div className="add-movies">{ this.state.loadedMore? null: <button 
                onClick={this.loadAdditionalMessages}>Load more...</button>
          }
        </div>
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
