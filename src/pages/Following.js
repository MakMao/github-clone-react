import React from 'react'
import { useGlobalContext } from '../context'
import User from '../components/User';

const Following = () => {

  const {following, setCategory} = useGlobalContext()
  setCategory('following')
  return (
    <>
      <User/>
      <div className="followers-container">
        {following.length > 0 && following.map((item, i) => {
          const {login, avatar_url, html_url} = item
          return (
            <div key={i} className="container followers">
              <img src={avatar_url} alt="Person's avatar" className='profile-pic'/>
              <div className="following-detail">
                <h3 className='follower-name'>{login}</h3>
                <a href={`${html_url}`} target="_blank" className="git-link">{html_url}</a>
              </div>
            </div>
          )
        })}
        {following.length === 0 && (
        <h3 className='no-followers'>This person is not following anyone yet.</h3>
      )}
      </div>
    </>
  )
}
export default Following