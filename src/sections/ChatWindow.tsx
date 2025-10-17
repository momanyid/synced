import React from 'react'
import MessageComponent from '../components/MessageComponent'
import './ChatWindow.css'

interface Message {
  id: number
  message: string
  time: string
  sender: 'user' | 'other'
}

interface Props {
  selectedChat: number
}

// Mock messages for different chats
const chatMessages: { [key: number]: Message[] } = {
  0: [
    { id: 1, message: 'Some text message to be texted hereijvo j oig fjofjoifjfo fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbojg fjgofd joif joifjoifdjoijfo of oif of j', time: '20:00am', sender: 'other' },
    { id: 2, message: 'Some text message to be texted here', time: '20:00am', sender: 'user' },
    { id: 3, message: 'Some text message to be texted here', time: '20:00am', sender: 'other' },
    { id: 4, message: 'Some text message to be texted here', time: '20:00am', sender: 'other' },
    { id: 5, message: 'Some text message to be texted here', time: '20:00am', sender: 'other' },
    { id: 6, message: 'Some text message to be texted here', time: '20:00am', sender: 'user' },
    { id: 1, message: 'Some text message to be texted here', time: '20:00am', sender: 'other' },
    { id: 2, message: 'Some text message to be texted here', time: '20:00am', sender: 'user' },
    { id: 3, message: 'Some text message to be texted here', time: '20:00am', sender: 'other' },
    { id: 4, message: 'Some text message to be texted here', time: '20:00am', sender: 'other' },
    { id: 5, message: 'Some text message to be texted here', time: '20:00am', sender: 'other' },
    { id: 6, message: 'Some text message to be texted here', time: '20:00am', sender: 'user' },
  ],
  1: [
    { id: 1, message: "Hey! How's it going?", time: '09:30am', sender: 'other' },
    { id: 2, message: "Pretty good! Just working on some features", time: '09:32am', sender: 'user' },
  ],
  2: [
    { id: 1, message: 'Good morning!', time: '08:00am', sender: 'other' },
    { id: 2, message: 'Morning! How are you?', time: '08:02am', sender: 'user' },
  ]
}

const ChatWindow: React.FC<Props> = ({ selectedChat }) => {
  const messages = chatMessages[selectedChat] || chatMessages[0]

  return (
    <div className='message-section-container'>
      <div className='message-list'>
        {messages.map((msg) => (
          <MessageComponent 
            key={msg.id} 
            message={msg.message} 
            time={msg.time}
            sender={msg.sender}
          />
        ))}
      </div>
      <div className='message-input-area'>
        <input 
          type='text' 
          placeholder='Type a message...' 
          className='message-input'
        />
        <button className='send-btn'>Send</button>
      </div>
    </div>
  )
}

export default ChatWindow