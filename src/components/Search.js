import React, {useState} from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  const [user, setUser] = useState('')
  const {searchGithubUser} = useGlobalContext()

  const handleSubmit= (e) => {
    e.preventDefault()
    if(user){
      searchGithubUser(user.replace(/\s/g, ''))
    }
  }

  return (
    <Wrapper>
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="search" 
          value={user} 
          placeholder='Search Github User..' 
          onChange={(e) => setUser(e.target.value)}/>
        <button className="btn icon" type='submit'><SearchIcon className='icon'/></button>
      </form>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  form {
    display: flex;
    align-items: center;
  }
  
  input {
    font-size: 1rem;
    color: var(--offset-white);
    width: 275px;
    letter-spacing: 1.5px;
  }

  button{
    padding: 0.2em;
    background: transparent;
    border: 0;
  }
  
  .icon {
    color: var(--offset-white);
    font-size: 1.8rem;
    margin-bottom: -0.1em;
    cursor: pointer;
  }

`

export default Search