import React from 'react'
import { useGlobalContext } from '../context'
import styled from 'styled-components'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import GroupsIcon from '@mui/icons-material/Groups';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Link} from 'react-router-dom'

const User = () => {
  const {githubUser, updateFilters, category, error} = useGlobalContext()
  const {avatar_url, location, blog, followers, following, name, bio} = githubUser 

  const allBtns = ['repos', 'followers', 'following']

  return (
    <Wrapper>
      {error.show && (
        <p className='error'>{error.msg}</p>
      )}
      <div className="img-container">
        <img src={avatar_url} alt="Person's avatar" className='avatar' />
      </div>
        <h2 className='center'>{name}</h2>
        <p className="center bio">{bio}</p>
      <div className="info-container">
        <div className="info">
          <LocationOnIcon className='icon'/>
          <p>{location ? location : 'Earth'}</p>
        </div>
        {blog && (
        <a href={`https://${blog}`} target="_blank" className="info link">
          <LanguageIcon className='icon'/>
          <p >{blog}</p>
        </a>
        )}
        <div className="info">
          <GroupsIcon className='icon'/>
          <p>{followers.toLocaleString()}</p>
        </div>
        <div className="info">
          <FavoriteIcon className='icon'/>
          <p>{following.toLocaleString()}</p>
        </div>
      </div>
      <div className="btn-container">
        {allBtns.map((item) => {
          return (
             <Link onClick={updateFilters} className={category === item ? 'btn active': 'btn'} to={`/${item === "repos" ? '' : item}`}>
               {item}
             </Link> 
          )
        })}
        <button className='fake-btn'></button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    margin-top: 7rem;

  .error {
    text-align: center;
    margin-top: -2em;
    margin-bottom: 1em;
    color: red
  }

 .img-container {
    display: flex;
    justify-content: center;
  } 

  .avatar {
    max-width: 150px;
    max-height: 150px;
    display: block;
    border: 0;
    width: 100%;
    border-radius: 50%;
    box-shadow: 0 0 1px 4px var(--light-dark);
  }

  .bio {
    opacity: 0.6;
    padding-bottom: 1em;
  }

  .btn{ 
    border: 1px solid transparent;
    padding: 0 1em;
    color: var(--light-dark);
    border-bottom: 1px solid black;
    font-size: 1rem;
    font-weight: 700;
    text-transform: capitalize;
    margin-left: -0.05em;
  }

  .btn-container{
    display: grid;
    grid-template-columns: auto auto auto 1fr;
    padding-top: 2em;
    margin: 0 auto;
    max-width: 1170px;
  }

  .fake-btn{
    border: 0;
    margin-left: -0.05em;
    background-color: transparent;
    border-bottom: 1px solid black;
  }

  .active {
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 0;
  }

  h2 {
    margin-top: 0.2em;
    margin-bottom: 0.2em;
  }

  .info {
    display: flex;
    align-items: center;
    justify-content: center;
    place-self: start center;
    column-gap: 0.35em;
    color: var(--light-dark);
    margin-bottom: 0.3em;
    transition: 0.3s;
  }

  .link:hover {
    opacity: 0.5;
  }

  @media (min-width: 675px) {
  .info-container { 
    display: flex;
    justify-content: center;
    column-gap: 1.5em;
    padding-top: 1em;
  }

  .btn {
    font-size: 1.2rem;
  }
}
`

export default User