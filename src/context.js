import React, {useState, useContext, useEffect} from 'react'
import mockUser from './mockData.js/mockUser';
import mockFollowers from './mockData.js/mockFollowers';
import mockFollowing from './mockData.js/mockFollowing';
import mockRepos from './mockData.js/mockRepos'
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const AppContext = React.createContext()

const AppProvider = ({children}) => {
  const [githubUser, setGithubUser] = useState(mockUser)
  const [followers, setFollowers] = useState(mockFollowers)
  const [following, setFollowing] = useState(mockFollowing)
  const [repos, setRepos] = useState(mockRepos)
  const [requests, setRequests]= useState(0)
  const [loading, setLoading]= useState(false)
  const [error, setError] = useState({ show: false, msg: '' });
  const [index, setIndex] = useState(1)
  const [category, setCategory] = useState('repos')

  const updateFilters = (e) => {
    let target = e.target.textContent
    setCategory(target)
  }

  const searchGithubUser = async (user) => {
    toggleError()
    setLoading(true)
    const response = await axios(`${rootUrl}/users/${user}`).catch(err => console.log(err))
    if(response){
      setGithubUser(response.data)
      console.log(response.data);
      const {login, followers_url} = response.data
    
      await Promise.allSettled([axios(`${rootUrl}/users/${login}/repos?per_page=100`), axios(`${followers_url}?per_page=100`), axios(`https://api.github.com/users/${login}/following`)])
      .then((results) =>  {
        setLoading(true)
        const [repos, followers, following] = results
        const status = 'fulfilled'
        if(repos.status === status) {
          setRepos(repos.value.data)
        }
        if(followers.status === status) {
          setFollowers(followers.value.data)
          setLoading(false)
        }
        if(following.status === status) {
          setFollowing(following.value.data)
          setLoading(false)
        }
      })
      setLoading(false)
    }else{
      setLoading(false)
      toggleError(true, 'There is no user with that username');
    }
  }

  function toggleError(show = false, msg = '') {
    setError({ show, msg });
  }

  const value= { githubUser,
    followers,
    repos,
    searchGithubUser,
    requests,
    loading,
    error,
    setLoading,
    index,
    updateFilters,
    category,
    setCategory,
    following,
    error,
    setError
  }

  useEffect(() => {
    searchGithubUser('bradtraversy');
  }, []);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}


export {AppContext, AppProvider}