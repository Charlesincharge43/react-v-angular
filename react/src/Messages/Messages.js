import React from 'react';
import { connect } from 'react-redux';

import './Messages.css';
import { clearMessages } from '../redux/messages';

const Messages = ({ messages, clearMessages }) => {
  return (messages.length ?
    <div>
      <h2>Messages</h2>
      <button class="clear" onClick={clearMessages}>clear</button>

      {messages.map(message => <div> {message} </div>)}
    </div> : null)
}

const mapStateToProps = ({ messages }) => ({ messages });
const mapDispatchToProps = { clearMessages };

export default connect(mapStateToProps, mapDispatchToProps)(Messages);