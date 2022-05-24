import React from 'react'
import styled from 'styled-components'
import Login from './Login'
import Search from './Search'

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-container">
        <div className="input-container">
          <Search/>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`

.nav-container {
    position: fixed;
    padding: 1em;
    background-color: var(--light-dark);
    color: #fff; 
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
  }

  .login-details{
    display: flex;
    justify-content: center;
    column-gap: 2rem;
  }
  span {
    font-weight: 700;
  }
  .input-container{
    margin: 0 auto;
    display: flex;
    border-radius: var(--radius);
    border: 2px solid white;
    /* box-shadow: 0 0 2px 2px var(--offset-white) ;  */
    width: fit-content;
    justify-content: center;
  }
  input {
    background: var(--clr-grey-10);
    padding: 0.5em;
    border: 0;
    outline: 0;
  }
`

export default Navbar