import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Error = () => {
  return (
    <Wrapper>
      <div className='error-container'>
        <h1>404</h1>
        <h3>Sorry, the page you are looking for cannot be found</h3>
        <Link to="/" className='error-link'>Back Home</Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 8em;
  h3 {
    margin-bottom: 1em;
  }
  .error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .error-link {
    color: var(--light-dark);
    font-size: 1.2em;
    font-weight: 700; 
    border: 2px solid var(--light-dark); 
    padding: 0.3em 0.2em;
    border-radius: var(--radius);
    transition: 0.3s;
  }

  .error-link:hover {
    color: var(--offset-white);
    background: var(--light-dark);
  }
`

export default Error