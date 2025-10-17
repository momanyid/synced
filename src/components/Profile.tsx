import React from 'react'
import './Profile.css'

interface Props {
  id: number
  image: string
  profileName: string
  profileMessage: string
  time: string
  unread?: number
  isSelected: boolean
  onSelect: (id: number) => void
}

const ChatComponent: React.FC<Props> = ({ 
  id, 
  image, 
  profileName, 
  profileMessage, 
  time, 
  unread,
  isSelected,
  onSelect 
}) => {
  return (
    <div 
      className={`chat-item ${isSelected ? 'active' : ''}`}
      onClick={() => onSelect(id)}
    >
      <div className="chat-left">
        <img src={image} alt={profileName} className="chat-avatar" />
        <div className="chat-text">
          <h4 className="chat-name">{profileName}</h4>
          <p className="chat-message">{profileMessage}</p>
        </div>
      </div>
      <div className="chat-right">
        <span className="chat-time">{time}</span>
        {unread && unread > 0 && <span className="chat-unread">{unread}</span>}
      </div>
    </div>
  )
}

export default ChatComponent