import React, {useState} from 'react'
import { useGlobalContext } from '../context'
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import StarIcon from '@mui/icons-material/Star';
import ForkLeftIcon from '@mui/icons-material/ForkLeft';
import Loading from './Loading';
import styled from 'styled-components'
import { Link} from "react-router-dom";

const Details = () => {
  const {followers, repos, setLoading, changeIndex, index} = useGlobalContext()


  console.log(followers);

  // const {login, avatar_url, html_url} = useGlobalContext



  return (
    <Wrapper>
      <div className="btn-container">
        <button className="btn" onClick={() => changeIndex(0)}>Follower</button>
        <button className="btn" onClick={() => changeIndex(1)}>Repos</button>
      </div>
      {(index === 0 && typeof followers === null) && <Loading/>}
      {index === 0 && (
          <div className="followers-container">
          {followers.map((item, i) => {
            const {login, avatar_url, html_url} = item
            return (
              <div key={i} className="follower">
                <img src={avatar_url} alt="Person's avatar" className='avatar'/>
                <div className="follower-detail">
                  <h3>{login}</h3>
                  <a href={`${html_url}`}>{html_url}</a>
                </div>
              </div>
            )
          })}
        </div>
      )}
      {index === 1 && (
      <div className="repos-container">
        {repos.map((item, index) => {
          const {name, stargazers_count: stars, html_url, language, description, forks} = item
          return (
            <div className='repo' kye={index}>
              <a href={html_url} target="_blank">
                <div className='repo-title'>
                  <h4><WorkIcon/>{name}</h4>
                </div>
              </a>
                <p>{description}</p>
                <div className="repo-details">
                  <div className="individual-detail">
                    <CodeIcon/>
                    <p>{language}</p>
                  </div>
                  <div className="individual-detail">
                    <StarIcon/>
                    <p>{stars}</p>
                  </div>
                  <div className="individual-detail">
                    <ForkLeftIcon/>
                    <p>{forks}</p>
                  </div>
                </div>
            </div>
          )
        })}
      </div>
      )}


    </Wrapper>
  )
}

const Wrapper = styled.div`
  .btn-container{
    display: flex;
    justify-content: center;
    column-gap: 1em;
  }

  h3 {
    margin-bottom: 0;
  }

  h4 {
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }

  .followers-container{
    border: 2px solid red;
    margin: 0 auto;
    margin-top: 2rem;
    column-gap: 2em;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    max-width: 1170px;
  }

  .follower{ 
    display: flex;
    padding: 0.3em;
    border: 1px solid green;
    align-items: center;
    column-gap: 1em;
    margin-bottom: 1em;
  }
  
  .repos-container {
    max-width: 1170px;
    margin: 0 auto;
    border: 2px solid red;
    margin-top: 2rem;
    display: grid;
    column-gap: 2em;
    grid-template-columns: repeat(2, 1fr);
  }

  .repo {
    border: 1px solid green;
    padding: 1em;

  }

  .repo-title {
    display: flex;
    align-items: center;
  }

  .individual-detail {
    display: flex;
    align-items: center;
    }
  
  .repo-details {
    display: flex;
  }

  .avatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
`

export default Details