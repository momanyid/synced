import React, { useState } from 'react'
import Sidebar from './sections/Sidebar'
import ChatWindow from './sections/ChatWindow'
import './App.css'

const App: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<number>(0)

  return (
    <div className='app-body'>
      <div className="header">
        <button className="menu-btn">☰</button>
        <h1 className="app-title">Synced</h1>
      </div>
      <div className="content-section">
        <div className="menu-bar">
          <img src='/assets/profile/Iron Man (2).jpg' className='profile-avatar'/>
          <button className='settings-btn'>
            <img src='/assets/profile/settings.svg' className='profile-avatar settings-icon'/>
          </button>
        </div>
        <div className="sidebar">
          <Sidebar selectedChat={selectedChat} onSelectChat={setSelectedChat} />
        </div>
        <div className="message-section">
          <ChatWindow selectedChat={selectedChat} />
        </div>
      </div>
      
    </div>
  )
}

export default App