import React, {Component} from 'react';
import {Launcher} from 'react-chat-window';
import styled from 'styled-components';
import './Chat.css';

const Div = styled.div`
background-color:red;`
 
class Demo extends Component {
 
  constructor() {
    super();
    this.state = {
      messageList: []
    };
  }
 
  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    })
  }
 
  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })
    }
  }
 
  render() {

    
    return (<Div>
      <Launcher 
        agentProfile={{
          teamName: 'Weds360',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
        showEmoji
      />
    </Div>)
  }
}

export default Demo ;