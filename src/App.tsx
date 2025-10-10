import React from 'react'
import ProfileSection from './sections/ProfileSection'
import MessageSection from './sections/MessageSection'
import './App.css'

const App:React.FC = () => {
  return (
    <div className='app-body' >
      <div className="profile-section">
        <ProfileSection />
      </div>
      <div className="message-section">
        <MessageSection />
      </div>
    </div>
  )
}

export default App