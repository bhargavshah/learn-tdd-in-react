import React from 'react';

function MessageList({ messages }) {
    return (<ul>
        {messages.map(message => <li key={message}>{message}</li>)}
    </ul>);
}

export default MessageList;