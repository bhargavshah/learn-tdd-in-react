import React, { useState } from "react";
import NewMessageForm from './NewMessageForm';
import MessageList from './MessageList';

function App() {
  const [messages, setMessages] = useState([]);
  const onSend = newMessage => setMessages([newMessage, ...messages]);

  return (
    <div>
      <NewMessageForm onSend={onSend} />
      <MessageList messages={messages} />
    </div>
  );
}

export default App;
