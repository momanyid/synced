import React from 'react'
import MessageComponent from '../components/MessageComponent'
import './MessageSection.css'

const MessageSection:React.FC = () => {

    const messages = [
        { id: 1, message: 'Hey there!', time: '09:30 AM' },
        { id: 2, message: 'How’s everything going?', time: '09:32 AM' },
        { id: 3, message: 'All good! Just working on that new feature.', time: '09:34 AM' },
        { id: 4, message: 'Nice! Can’t wait to see it.', time: '09:35 AM' },
    ]

    return (
        <div>
            {messages.map((msg) => (
                <MessageComponent key={msg.id} message={msg.message} time={msg.time} />
            ))}
        </div>
    )
}

export default MessageSection