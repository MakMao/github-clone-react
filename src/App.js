import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import Error from "./pages/Error";
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
        <Routes>
         <Route path="*" element={<Error/>}/>
          <Route path="/" element={<Repos/>}/>
          <Route path="/followers" element={<Followers/>}></Route>
          <Route path="/following" element={<Following/>}/>
        </Routes>
    </Router>
  );
}

export default App;
