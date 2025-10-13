import React, { useState } from 'react'
import ProfileSection from './sections/ProfileSection'
import MessageSection from './sections/MessageSection'
import './App.css'

const App: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<number>(0)

  return (
    <div className='app-body'>
      <div className="sidebar">
        {/* <div className="header">
          <button className="menu-btn">☰</button>
          <h1 className="app-title">Synced</h1>
        </div> */}
        <ProfileSection selectedChat={selectedChat} onSelectChat={setSelectedChat} />
      </div>
      <div className="message-section">
        <MessageSection selectedChat={selectedChat} />
      </div>
    </div>
  )
}

export default App