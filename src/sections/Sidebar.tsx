import React from 'react'
import SearchComponent from '../components/SearchComponent'
import ChatComponent from '../components/Profile'
import './Sidebar.css'

interface Profile {
    id: number
    image: string
    profileName: string
    profileMessage: string
    time: string
    unread?: number
}

const profiles: Profile[] = [
  { id: 1, image: "../src/assets/profile/Iron Man (2).jpg", profileName: 'John', profileMessage: 'Hello there', time: '08:00am'},
  { id: 2, image: '../src/assets/profile/wp11920705-nubia-red-magic-8-pro-wallpapers-1.png', profileName: 'Brian', profileMessage: 'How are you', time: '08:00am', unread: 2 },
  { id: 3, image: '../src/assets/profile/Iron Man (2).jpg', profileName: 'Mercy', profileMessage: 'Good morning', time: '08:00am', unread: 2 },
  { id: 4, image: '../src/assets/profile/wallpaperflare.com_wallpaper (1).jpg', profileName: 'Arnold', profileMessage: 'Heyyy', time: '08:00am'},
  { id: 5, image: '../src/assets/profile/Iron Man (2).jpg', profileName: 'Linus', profileMessage: 'How is it going', time: '08:00am', unread: 2 },
  { id: 6, image: '../src/assets/profile/leonardo.jpg', profileName: 'David', profileMessage: 'It went okay', time: '08:00am' },
  { id: 7, image: '../src/assets/profile/Iron Man (2).jpg', profileName: 'Joe', profileMessage: 'google.com', time: '08:00am', unread: 2 },
  { id: 8, image: '../src/assets/profile/20240601_171616.jpg', profileName: 'Evans', profileMessage: 'Hello there', time: '08:00am' },
]

interface Props {
  selectedChat: number
  onSelectChat: (id: number) => void
}

const ProfileSection: React.FC<Props> = ({ selectedChat, onSelectChat }) => {
  return (
    <div className='profile-section-container'>
      <SearchComponent />
      <div className="profiles-list">
        {profiles.map((profile) => (
          <ChatComponent 
            key={profile.id}
            id={profile.id}
            image={profile.image} 
            profileName={profile.profileName} 
            profileMessage={profile.profileMessage} 
            time={profile.time} 
            unread={profile.unread}
            isSelected={selectedChat === profile.id}
            onSelect={onSelectChat}
          />
        ))}
      </div>
    </div>
  )
}

export default ProfileSection