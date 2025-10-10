import React from 'react'
import SearchComponent from '../components/SearchComponent'
import ChatComponent from '../components/ChatComponent'

interface Profile {
    image: string,
    profileName: string,
    profileMessage: string,
    time: string,
    unread?: number,
}

const profiles: Profile[] = [
  { image: '/images/avatar1.jpg', profileName: 'John', profileMessage: 'Hello there', time: '08:00 AM', unread: 0 },
  { image: '/images/avatar2.jpg', profileName: 'Brian', profileMessage: 'How are you', time: '08:00 AM', unread: 2 },
  { image: '/images/avatar3.jpg', profileName: 'Mercy', profileMessage: 'Good morning', time: '08:00 AM', unread: 2 },
  { image: '/images/avatar4.jpg', profileName: 'Arnold', profileMessage: 'Heyyy', time: '08:00 AM', unread: 0 },
  { image: '/images/avatar5.jpg', profileName: 'Linus', profileMessage: 'How is it going', time: '08:00 AM', unread: 2 },
  { image: '/images/avatar6.jpg', profileName: 'David', profileMessage: 'It went okay', time: '08:00 AM', unread: 0 },
  { image: '/images/avatar7.jpg', profileName: 'Joe', profileMessage: 'google.com', time: '08:00 AM', unread: 2 },
  { image: '/images/avatar8.jpg', profileName: 'Evans', profileMessage: 'Hello there', time: '08:00 AM', unread: 0 },
]

const ProfileSection:React.FC = () => {
  return (
    <div className='profile-section'>
        <SearchComponent />
        <div className="profiles">
            {profiles.map((profile, index) => (
                <ChatComponent key={index} image={profile.image} profileName={profile.profileName} profileMessage={profile.profileMessage} time={profile.time} unread={profile.unread} />
            ))}
        </div>
    </div>
  )
}

export default ProfileSection