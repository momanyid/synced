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
  { image: "/src/assets/profile/Iron Man (2).jpg", profileName: 'John', profileMessage: 'Hello there', time: '08:00 AM', unread: 0 },
  { image: '/src/assets/profile/wp11920705-nubia-red-magic-8-pro-wallpapers-1.png', profileName: 'Brian', profileMessage: 'How are you', time: '08:00 AM', unread: 2 },
  { image: '/src/assets/profile/Iron Man (2).jpg', profileName: 'Mercy', profileMessage: 'Good morning', time: '08:00 AM', unread: 2 },
  { image: '/src/assets/profile/wallpaperflare.com_wallpaper (1).jpg', profileName: 'Arnold', profileMessage: 'Heyyy', time: '08:00 AM', unread: 0 },
  { image: '/src/assets/profile/Iron Man (2).jpg', profileName: 'Linus', profileMessage: 'How is it going', time: '08:00 AM', unread: 2 },
  { image: '/src/assets/profile/leonardo.jpg', profileName: 'David', profileMessage: 'It went okay', time: '08:00 AM', unread: 0 },
  { image: '/src/assets/profile/Iron Man (2).jpg', profileName: 'Joe', profileMessage: 'google.com', time: '08:00 AM', unread: 2 },
  { image: '/src/assets/profile/20240601_171616.jpg', profileName: 'Evans', profileMessage: 'Hello there', time: '08:00 AM', unread: 0 },
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