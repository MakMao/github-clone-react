import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import styled from 'styled-components'
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import User from "./components/User";
import Details from "./components/Details";
import Followers from "./pages/Followers";
import Following from "./pages/Following";
import Repos from "./pages/Repos";
import { useGlobalContext } from './context';

function App() {
  const {loading} = useGlobalContext()
  if(loading){
    return (
      <>
      <Router>
        <Navbar/>
        <Loading/>
      </Router>
      </>
    ) 
  }

  return (
    <Router>
        <Navbar/>
        {/* <User/> */}
        <Routes>
          <Route path="/" element={<Repos/>}/>
          <Route path="/followers" element={<Followers/>}/>
          <Route path="/following" element={<Following/>}/>
        </Routes>
    </Router>
  );
}

const Wrapper = styled.div`
`

export default App;
