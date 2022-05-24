import React from 'react'
import PersonRemoveAlt1Icon from '@mui/icons-material/PersonRemoveAlt1';
import styled from 'styled-components'


const Login = () => {
  return (
    <Wrapper>
    <div className="login-container">
      <PersonRemoveAlt1Icon/>
      <p className="login-text">Logout</p>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  
  .login-container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    column-gap: 0.5em;
  }
`

export default Login