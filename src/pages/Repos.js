import React from 'react'
import { useGlobalContext } from '../context'
import styled from 'styled-components'
import { Link} from "react-router-dom";
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import StarIcon from '@mui/icons-material/Star';
import ForkLeftIcon from '@mui/icons-material/ForkLeft';
import User from '../components/User';


const Repos = () => {
  const {repos} = useGlobalContext()
  return (
    <Wrapper>
      <User/>
      <div className="repos-container">
        {repos.length > 0 && repos.map((item, index) => {
      const {name, stargazers_count: stars, html_url, language, description, forks} = item
      return (
        <div className='container repo' kye={index}>
          <a href={html_url} target="_blank">
            <div className='repo-title'>
              <WorkIcon className='icon'/>
              <h4 className='repo-title-name'>{name}</h4>
            </div>
          </a>
            <p className='description'>{description}</p>
            <div className="repo-details">
              <div className="individual-detail">
                <CodeIcon className='icon'/>
                <p>{language}</p>
              </div>
              <div className="individual-detail">
                <StarIcon className='icon'/>
                <p>{stars}</p>
              </div>
              <div className="individual-detail">
                <ForkLeftIcon className='icon'/>
                <p>{forks}</p>
              </div>
            </div>
        </div>
          )
        })}
       {repos.length === 0 && (
        <h3 className='no-followers'>This person is not following anyone yet.</h3>
      )}
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.div`
   .repos-container {
    max-width: 1170px;
    margin: 0 auto;
    margin-top: 2rem;
    display: grid;
    column-gap: 2em;
    row-gap: 2em;
    grid-template-columns: repeat(2, 1fr);
  }

  .no-followers {
    margin: 0 auto;
  }

  @media (max-width: 768px){
    .repos-container {
      display: flex;
      flex-direction: column;
    }
    .repo {
      max-width: 500px;
      width: 95% ;
      margin: 0 auto;
    }
  }

  p{
    color: var(--light-dark);
  }


  .repo {
    display: grid;
    padding: 1em;
   
  }

  .repo-title {
    display: flex;
    align-items: center;
    column-gap: 0.5em;
    margin-bottom: 0.5em;

  }

  .description{
    margin-bottom: 0.5em;
  }

  .repo-title-name {
    margin: 0;
    margin-bottom: -0.15em;
    color: var(--light-blue);
  }

  .repo-title-name:hover {
    text-decoration: underline;
  }

  .individual-detail {
    display: flex;
    align-items: center;
    justify-content: center;
    }
  
  .repo-details {
    display: flex;
    align-items: center;
    column-gap: 1em;
  }

`

export default Repos