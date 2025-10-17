import React from 'react'
import './MessageComponent.css'

interface Props {
    message: string
    time: string
    sender: 'user' | 'other'
}

const MessageComponent: React.FC<Props> = ({ message, time, sender }) => {
  return (
    <div className={`message-container ${sender}`}>
      <div className={`message-bubble ${sender === "user"? 'left': 'right'}`}>
        <p className='message-text'>{message}</p>
        <span className='message-time'>{time}</span>
      </div>
    </div>
  )
}

export default MessageComponent