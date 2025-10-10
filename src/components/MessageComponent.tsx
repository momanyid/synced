import React from 'react'
import './MessageComponent.css'

interface Props {
    message: String,
    time: String
}

const MessageComponent:React.FC<Props> = ({message, time}) => {

  return (
    <div>
        <p>{message}</p>
        <span>{time}</span> 
    </div>
  )
}

export default MessageComponent