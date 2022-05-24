import React from 'react'
import { useGlobalContext } from '../context'
import User from '../components/User';

const Followers = () => {
  const {followers} = useGlobalContext()

  return (
    <>
    <User/>
    <div className="followers-container">
      {followers.length > 0 && followers.map((item, i) => {
        const {login, avatar_url, html_url} = item
        return (
          <div key={i} className="container followers">
            <img src={avatar_url} alt="Person's avatar" className='profile-pic'/>
            <div className="follower-detail">
              <h3 className='follower-name'>{login}</h3>
              <a href={`${html_url}`} className="git-link" target="_blank">{html_url}</a>
            </div>
          </div>
        )
      })}
      {followers.length === 0 && (
        <h3 className='no-followers'>This person does not have any followers yet.</h3>
      )}
    </div>
    </>
  )
}


export default Followers